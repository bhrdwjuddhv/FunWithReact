import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <table className="border-collapse border border-gray-400 bg-white">
                <thead>
                <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-4 py-2">Page Name</th>
                    <th className="border border-gray-400 px-4 py-2">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">
                        Background Changer
                    </td>
                    <td className="border border-gray-400 px-4 py-2 text-center">
                        <Link
                            to="/bgchanger"
                            className="text-blue-600 hover:underline"
                        >
                            Open
                        </Link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Home;
