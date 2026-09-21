import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul className="flex space-x-4 bg-gray-600 p-4 text-white">
                <Link to="/">Home</Link>
                <Link to="/student">Student</Link>
                <Link to="/add-student">Add Student</Link>
                <Link to="/teachers">Teachers</Link>
                <Link to="/add-teacher">Add Teacher</Link>
            </ul>
        </nav>
    );

};