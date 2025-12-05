import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "@/lib/api";
import { CharacterCard } from "@/components/character-card";
import { Pagination } from "@/components/pagination";
import { SearchBar } from "@/components/search-bar";
import { useFavorites } from "@/hooks/use-favorites";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

export default function Home() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { isFavorite, toggleFavorite } = useFavorites();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["characters", page, search],
    queryFn: () => getCharacters(page, search),
    placeholderData: (previousData) => previousData,
  });

  const handleSearch = (val: string) => {
    setSearch(val);
    setPage(1); // Reset to page 1 on search
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl md:text-6xl font-display font-bold bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
          The Multiverse
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore la base de datos de todos los seres sensibles conocidos a lo largo de la curva finita central.
        </p>
      </div>

      <SearchBar value={search} onChange={handleSearch} />

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-[300px] w-full rounded-xl" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : isError ? (
        <div className="text-center py-20">
          <h3 className="text-2xl font-bold text-destructive mb-2">Error al cargar datos</h3>
          <p className="text-muted-foreground">No se pudieron obtener personajes de los servidores de Ciudadela.</p>
        </div>
      ) : (
        <>
          {data?.results.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No se encontraron caracteres en esta dimensión.</p>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {data?.results.map((char) => (
                <CharacterCard
                  key={char.id}
                  character={char}
                  isFavorite={isFavorite(char.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </motion.div>
          )}

          <Pagination
            currentPage={page}
            totalPages={data?.info.pages || 0}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
}
