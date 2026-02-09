import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-5xl font-bold mb-4">404</h1>
            <p className="text-lg mb-6">Page not found</p>

            <Link
                to="/"
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
                Go back home
            </Link>
        </div>
    );
}

export default NotFound;
