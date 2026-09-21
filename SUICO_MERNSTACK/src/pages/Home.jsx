import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center py-8">Welcome to the Student Management System</h1>
            <div className="flex justify-center">
                <Link to="/student" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View Students
                </Link>
            </div>
        </div>
    );
}