import { Link } from "react-router-dom";
import { useFilms } from "../../hooks/useFilms";

export function Home() {
    const { data, isLoading, error } = useFilms();

    const orderedMovies = data ? [...data].sort((a, b) => a.title.localeCompare(b.title)).slice(0, 10) : [];

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p className="text-4xl font-semibold">Carregando...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p className="text-4xl font-semibold">Ocorreu um erro ao carregar os filmes: {error.message}</p>
            </div>
        );
    }

    return (
        <>
            <ul className="max-w-7xl flex justify-center flex-wrap mx-auto mt-6 gap-4">
                {orderedMovies?.map((film) => (
                    <li
                        key={film.id}
                        className="max-w-75 w-full text-center  p-4 cursor-pointer rounded-2xl border bg-gray-200 border-gray-300"
                    >
                        <Link to={`/films/${film.id}`} className="product-card">
                            <img src={film.image} alt={film.title} className=" w-66.5  h-100" />
                            <h3 className="text-2xl font-bold text-black">{film.title}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
