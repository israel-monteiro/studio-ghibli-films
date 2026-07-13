import { useParams } from "react-router-dom";
import { useFilms } from "../../hooks/useFilms";

export const FilmDetail = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useFilms();

    const filmDetail = data?.find((film) => film.id === id);

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p className="text-4xl font-semibold">Carregando detalhes...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p className="text-4xl font-semibold">Erro ao carregar o filme: {error.message}</p>
            </div>
        );
    }

    if (!filmDetail) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p className="text-4xl font-semibold">Filme não encontrado.</p>
            </div>
        );
    }

    return (
        <>
            <div className="max-w-6xl mx-auto my-10 flex flex-col md:flex-row gap-10">
                <img
                    src={filmDetail?.image}
                    alt={filmDetail?.title}
                    className="w-full max-w-sm rounded-2xl shadow-lg object-cover"
                />

                <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-8">{filmDetail?.title}</h1>

                    <div className="space-y-6">
                        <div className="border-b pb-4">
                            <h3 className="text-sm text-gray-500">Título original</h3>

                            <p className="text-lg">{filmDetail?.original_title}</p>
                        </div>

                        <div className="border-b pb-4">
                            <h3 className="text-sm text-gray-500">Diretor</h3>

                            <p className="text-lg">{filmDetail?.director}</p>
                        </div>

                        <div className="border-b pb-4">
                            <h3 className="text-sm text-gray-500">Produtor</h3>

                            <p className="text-lg">{filmDetail?.producer}</p>
                        </div>

                        <div className="border-b pb-4">
                            <h3 className="text-sm text-gray-500">Ano de lançamento</h3>

                            <p className="text-lg">{filmDetail?.release_date}</p>
                        </div>

                        <div className="border-b pb-4">
                            <h3 className="text-sm text-gray-500">Rotten Tomatoes</h3>

                            <p className="text-lg text-red-600 font-semibold">🍅 {filmDetail?.rt_score}%</p>
                        </div>

                        <div>
                            <h3 className="text-sm text-gray-500 mb-2">Descrição</h3>

                            <p className="leading-7 text-gray-700">{filmDetail?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
