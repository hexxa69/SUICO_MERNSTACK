import { useParams } from 'react-router-dom';
import students from '../data/students.json';

export default function StudentDetails() {
  const { id } = useParams();
  const student = students.find((student) => student.id === parseInt(id));

  return (
    <div className="text-center bg-red-50 rounded-lg shadow-md p-10 m-4">
      <h1 className="text-3xl font-bold mb-4">Student Details</h1>
        <div>
          <h2 className="text-2xl font-bold mb-2">Name: {student.name}</h2>
          <p className="text-gray-700">Age: {student.age}</p>
        </div>
    </div>
  );
}
