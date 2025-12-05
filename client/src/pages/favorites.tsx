import { CharacterCard } from "@/components/character-card";
import { useFavorites } from "@/hooks/use-favorites";
import { motion } from "framer-motion";

export default function Favorites() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="relative min-h-screen"> {/* New relative container for video and content */}
      <div className="absolute inset-0 overflow-hidden"> {/* Video container */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter blur-sm opacity-10"
        >
          <source src="/BackgroundFav.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10 space-y-8 py-8"> {/* Existing content, now on top */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-6xl font-display font-bold bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
            Tu escuadrón
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Los elegidos a través de las dimensiones.
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-white/10 rounded-3xl">
            <h3 className="text-2xl font-bold text-muted-foreground mb-2">No Favorites Yet</h3>
            <p className="text-muted-foreground/60">Start exploring the multiverse and add some characters to your collection.</p>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {favorites.map((char) => (
              <CharacterCard
                key={char.id}
                character={char}
                isFavorite={isFavorite(char.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
