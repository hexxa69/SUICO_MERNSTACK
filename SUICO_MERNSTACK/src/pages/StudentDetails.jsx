import { useParams } from "react-router-dom";
import students from "../data/students.json";



export default function StudentDetails() {
const { id } = useParams();

const student = students.find(
    (student) => student.id == parseInt(id)
);
    return (

        <div className="bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center py-8">Student Details</h1>
            <div className="flex flex-wrap justify-center">
                <div className="bg-red-100 shadow-md rounded-lg p-4 m-4 max-w-sm mx-auto">
                    <h2 className="text-xl font-semibold">{student.name}</h2>
                    <p className="text-gray-600">Age: {student.age}</p>
                    <p className="text-gray-600">Student Number: {student.id}</p>
                    
                </div>
            </div>
        </div>

);
};