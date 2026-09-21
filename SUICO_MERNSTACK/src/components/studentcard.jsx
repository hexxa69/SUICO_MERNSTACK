import { Link, Route } from "react-router-dom";

function studentCard({ id, name, age, sex, course, courseDescription }) {
    return (
        <div className="align-center bg-gray-300 shadow-md rounded-lg p-4 m-4 max-w-sm mx-auto">
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-600 mb-1">Age: {age}</p>
            <p className="text-gray-600 mb-1">Sex: {sex}</p>
            <p className="text-gray-600 mb-1">Course: {course}</p>
            <p className="text-gray-600 mb-1">Course Description: {courseDescription}</p><br/>
            <Link to={`/student/${id}`} className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-800">
                View Student Details
            </Link>
            
        </div>
    );
}

export default studentCard;