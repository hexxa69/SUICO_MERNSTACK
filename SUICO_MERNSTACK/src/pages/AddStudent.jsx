import students from '../data/students.json';
export default function AddStudent() {

  return (
     <div className="text-center p-10">
      <h1 className="text-3xl font-bold mb-4">Add Student</h1>
      <p className="text-gray-700">This is the Add Student page.</p>
      <form className="flex flex-col items-center mt-4" onSubmit={(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const age = e.target.age.value;
        const sex = e.target.sex.value;
        const course = e.target.course.value;
        const newStudent = {
          name,
          age,
          sex,
          course
        };
        students.push(newStudent);
      }}>
        <input type="text" name="name" placeholder="Name" className="border border-gray-300 rounded-md p-2 mb-2 w-64" />
        <input type="number" name="age" placeholder="Age" className="border border-gray-300 rounded-md p-2 mb-2 w-64" />
        <select name="sex" className="border border-gray-300 rounded-md p-2 mb-2 w-64">
          <option value="">Select Sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input type="text" name="course" placeholder="Course" className="border border-gray-300 rounded-md p-2 mb-2 w-64" />
        <button type="submit" className="bg-blue-500 text-white rounded-md p-2 w-64">Add Student</button>
      </form>
    </div>
  );
}