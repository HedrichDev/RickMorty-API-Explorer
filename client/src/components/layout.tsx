import { Link, useLocation } from "wouter";
import { Heart, Home, Volume2, VolumeX } from "lucide-react"; // Import Volume2 and VolumeX
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react"; // Import useState

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    const savedMuteState = localStorage.getItem("backgroundMusicMuted");
    return savedMuteState === "true"; // Default to false if not found
  });

  useEffect(() => {
    const savedTime = localStorage.getItem("backgroundMusicTime");
    const savedMuteState = localStorage.getItem("backgroundMusicMuted");

    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Set volume to 50%
      audioRef.current.muted = savedMuteState === "true"; // Apply initial mute state

      if (savedTime) {
        audioRef.current.currentTime = parseFloat(savedTime);
      }
    }

    const saveCurrentTime = () => {
      if (audioRef.current) {
        localStorage.setItem("backgroundMusicTime", audioRef.current.currentTime.toString());
      }
    };

    // Save current time before unload
    window.addEventListener("beforeunload", saveCurrentTime);
    // Save current time periodically in case of crash/unexpected close
    const interval = setInterval(saveCurrentTime, 5000); // Save every 5 seconds

    return () => {
      window.removeEventListener("beforeunload", saveCurrentTime);
      clearInterval(interval);
      saveCurrentTime(); // Final save on component unmount
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <audio ref={audioRef} src="/soundtrack.mp3" loop autoPlay preload="auto" />
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/Logo.png" alt="Project Logo" className="h-8 w-8" />
            <h1 className="text-2xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              『HZ』┊ RICK AND MORTY
            </h1>
          </Link>

          <nav className="flex items-center gap-2">
            <Link href="/">
              <Button 
                variant={location === "/" ? "secondary" : "ghost"} 
                size="sm"
                className="gap-2"
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Home</span>
              </Button>
            </Link>
            <Link href="/favorites">
              <Button 
                variant={location === "/favorites" ? "secondary" : "ghost"}
                size="sm"
                className="gap-2"
              >
                <Heart className="w-4 h-4 text-destructive" fill={location === "/favorites" ? "currentColor" : "none"} />
                <span className="hidden sm:inline">Favorites</span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const newMuteState = !isMuted;
                setIsMuted(newMuteState);
                if (audioRef.current) {
                  audioRef.current.muted = newMuteState;
                }
                localStorage.setItem("backgroundMusicMuted", newMuteState.toString());
              }}
              className="gap-2"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span className="sr-only">{isMuted ? "Unmute" : "Mute"} Music</span>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="border-t border-border/40 py-8 text-center text-muted-foreground text-sm">
        <a href="https://github.com/HedrichDev" target="_blank" rel="noopener noreferrer" className="block mt-4 mb-2">
          <img src="/HedrichDev.png" alt="HedrichDev Logo" className="w-16 h-16 mx-auto" />
        </a>
        <p>© {new Date().getFullYear()} Rick and Morty Explorer. HΞDЯICHDΞV </p>
      </footer>
    </div>
  );
}
