import { Link } from "react-router-dom";

function StudentCard({ student }) {
    return (
        <div className="align-center bg-gray-300 shadow-md rounded-lg p-4 m-4 max-w-sm mx-auto">
            <h2 className="text-xl font-semibold mb-2">{student.name}</h2>
            <p className="text-gray-600 mb-1">Age: {student.age}</p>
            <p className="text-gray-600 mb-1">Sex: {student.sex}</p>
            <p className="text-gray-600 mb-1">Course: {student.course}</p>
            <p className="text-gray-600 mb-1">Course Description: {student.courseDescription}</p><br/>
            <Link to={`/student/${student.id}`} className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-800">
                View Student Details
            </Link>
            
        </div>
    );
}

export default StudentCard;