import students from "../data/students.json";
import StudentCard from "../components/studentcard.jsx";

export default function Students() {
    return (    
        <div className="bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center py-8">Student List</h1>
            <div className="flex flex-wrap justify-center">
                {students.map((student) => (
                    <StudentCard key={student.id} student={student} />
                ))}
            </div>
        </div>
    );
}