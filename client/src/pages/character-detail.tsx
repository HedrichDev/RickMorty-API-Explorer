import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { getCharacter, getEpisodes } from "@/lib/api";
import { useFavorites } from "@/hooks/use-favorites";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Heart, MapPin, Tv, Activity, User } from "lucide-react";
import { motion } from "framer-motion";

export default function CharacterDetail() {
  const [, params] = useRoute("/character/:id");
  const id = params?.id || "";
  const { isFavorite, toggleFavorite } = useFavorites();

  const { data: character, isLoading } = useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacter(id),
    enabled: !!id,
  });

  const { data: episodes, isLoading: isLoadingEpisodes } = useQuery({
    queryKey: ["episodes", character?.episode],
    queryFn: () => getEpisodes(character?.episode || []),
    enabled: !!character?.episode?.length,
  });

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <Skeleton className="h-8 w-32" />
        <div className="grid md:grid-cols-2 gap-8">
          <Skeleton className="h-[400px] w-full rounded-xl" />
          <div className="space-y-4">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!character) return <div>Personaje no encontrado</div>;

  const isFav = isFavorite(character.id);

  return (
    <div className="max-w-5xl mx-auto">
      <Link href="/">
        <Button variant="ghost" className="mb-6 gap-2 pl-0 hover:bg-transparent hover:text-primary">
          <ArrowLeft className="w-4 h-4" />
          De vuelta al multiverso
        </Button>
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-[400px_1fr] gap-8 lg:gap-12"
      >
        <div className="space-y-6">
          <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)]">
            <img 
              src={character.image} 
              alt={character.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <Button 
            className={`w-full gap-2 ${isFav ? 'bg-destructive text-destructive-foreground hover:bg-destructive/90' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}
            onClick={() => toggleFavorite(character)}
          >
            <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
            {isFav ? 'Remove from Favorites' : 'Add to Favorites'}
          </Button>
        </div>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
              {character.name}
            </h1>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="text-lg py-1 px-3 border-primary/30 bg-primary/5 text-primary">
                {character.status}
              </Badge>
              <Badge variant="secondary" className="text-lg py-1 px-3 bg-secondary/20 text-secondary-foreground hover:bg-secondary/30">
                {character.species}
              </Badge>
              <Badge variant="outline" className="text-lg py-1 px-3 border-white/10">
                {character.gender}
              </Badge>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm space-y-1">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <MapPin className="w-4 h-4" />
                <span className="text-sm uppercase tracking-wider">Origin</span>
              </div>
              <p className="text-xl font-medium">{character.origin.name}</p>
            </div>

            <div className="p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm space-y-1">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Activity className="w-4 h-4" />
                <span className="text-sm uppercase tracking-wider">Current Location</span>
              </div>
              <p className="text-xl font-medium">{character.location.name}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground border-b border-border/30 pb-2">
              <Tv className="w-5 h-5" />
              <span className="font-display text-lg">Episodes ({character.episode.length})</span>
            </div>
            
            {isLoadingEpisodes ? (
              <div className="space-y-2">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {episodes?.map((ep) => (
                  <div key={ep.id} className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                    <span className="text-primary font-mono text-xs block mb-1">{ep.episode}</span>
                    <span className="font-medium text-sm">{ep.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
