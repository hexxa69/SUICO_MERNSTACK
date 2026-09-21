import teacher from "../data/teacher.json";

export default function Teachers() {
    return (    
        <div className="bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center py-8">Teacher List</h1>
            <div className="flex flex-wrap justify-center">
                {teacher.map((teacher) => (
                    <div key={teacher.id} className="bg-red-100 shadow-md rounded-lg p-4 m-4 max-w-sm mx-auto">
                        <h2 className="text-xl font-semibold mb-2">{teacher.name}</h2>
                        <p className="text-gray-600 mb-1">Employee Number: {teacher.employeenumber}</p>
                        <p className="text-gray-600 mb-1">Specialization: {teacher.specialization}</p>
                        <p className="text-gray-600 mb-1">Department: {teacher.department}</p>
                        <p className="text-gray-600 mb-1">Sex: {teacher.sex}</p>
                        <a href={`/teacher/${teacher.id}`} className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-800">
                            View Teacher Details
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}