import { Link } from 'react-router-dom';
import students from '../data/students.json';

export default function Students() {
  return (
    <div className="flex flex-wrap justify-center">
      <h1 className="text-3xl font-bold mb-4">Students List</h1>
        {students.map((student) => (
          <Link to={`/student/${student.id}`} key={student.id} className="block">
            <div className="text-center bg-red-50 rounded-lg shadow-md p-10 m-4">
              <h2 className="text-2xl font-bold mb-2">Name: {student.name}</h2>
              <p className="text-gray-700">Age: {student.age}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}
