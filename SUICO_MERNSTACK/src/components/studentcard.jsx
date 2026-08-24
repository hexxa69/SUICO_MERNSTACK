function StudentCard({ name, age, bday, studentNum, course}) {
  return (
    <div className="text-center bg-red-50 rounded-lg shadow-md p-10 m-4">
      <h3 className="text-lg font-bold">Name: {name}</h3>
      <p className="text-gray-600">Age: {age}</p>
      <p className="text-gray-600">Birthday: {bday}</p>
      <p className="text-gray-600">Student Number: {studentNum}</p>
      <p className="text-gray-600">Course: {course}</p> 
    </div>
  );
}

export default StudentCard;