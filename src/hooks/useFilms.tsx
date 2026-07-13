import { useQuery } from "@tanstack/react-query";
import type { Film } from "../types/types";

const fetchFilms = async (): Promise<Film[]> => {
    const Response = await fetch(`https://ghibliapi.vercel.app/films`);

    if (!Response.ok) throw new Error("Erro ao buscar os dados");
    return Response.json();
};

export function useFilms() {
    return useQuery<Film[]>({
        queryKey: ["Films"],
        queryFn: () => fetchFilms(),
        refetchOnWindowFocus: false, //evita o refetch ao focar/voltar para a aba
        refetchOnReconnect: false, // não refaz a requisição ao reconectar a internet
        staleTime: 1000 * 60 * 5, // ele vai considerar que em até 5 minutos os dados estão frescos, se fizer refetch em 3 minutos, usa o cache, Se for acima de 5 minutos faz uma nova requisição.
    });
}