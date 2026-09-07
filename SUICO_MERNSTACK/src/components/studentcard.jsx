import { Link } from 'react-router-dom';

function StudentCard({ id, name, age }) {
  return (
    <div className="text-center bg-red-50 rounded-lg shadow-md p-10 m-4">
      <h2 className="text-2xl font-bold mb-2">Name: {name}</h2>
      <p className="text-gray-700">Age: {age}</p>
      <Link to={`/student/${id}`} className="text-blue-500 hover:underline">
        View Details
      </Link>
    </div>
  );
}

export default StudentCard;