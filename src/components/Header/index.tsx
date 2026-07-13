import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <header className="flex justify-center bg-white border-b border-gray-200 shadow-sm">
                <nav className=" mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-6">
                    <Link to="/" className="flex items-center gap-3">
                        <h1 className="text-4xl font-bold">Studio Ghibli</h1>
                    </Link>

                    <ul className="flex items-center gap-10">
                        <li>
                            <Link to="/" className="font-medium text-2xl">
                                Home
                            </Link>
                        </li>

                    </ul>
                </nav>
            </header>
        </>
    );
};
