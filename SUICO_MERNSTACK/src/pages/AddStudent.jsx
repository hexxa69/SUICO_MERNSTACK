import { useState } from "react";
import studentData from "../data/students.json";

export default function AddStudents() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("");
    const [course, setCourse] = useState("");
    const [courseDescription, setCourseDescription] = useState("");
    const [students, setStudents] = useState(studentData);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Add Student</h1>
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm"
                onSubmit={(e) => {
                    e.preventDefault();
                    const newStudent = {
                        id: students.length + 1,
                        name,
                        age,
                        sex,
                        course,
                        courseDescription,
                    };
                    setStudents([...students, newStudent]);
                    setName("");
                    setAge("");
                    setSex("");
                    setCourse("");
                    setCourseDescription("");
                }}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Enter name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                        Age
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="age"
                        type="number"
                        placeholder="Enter age"
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sex">
                        Sex
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="sex"
                        onChange={(e) => setSex(e.target.value)}
                        required
                    >
                        <option value="">Select Sex</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course">
                        Course
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="course"
                        type="text"
                        placeholder="Enter course"
                        onChange={(e) => setCourse(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseDescription">
                        Course Description
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="courseDescription"
                        type="text"
                        placeholder="Enter course description"
                        onChange={(e) => setCourseDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add Student
                    </button>
                </div>
            </form>
            {students.map((student) => (
                <div key={student.id} className="bg-gray-300 shadow-md rounded-lg p-4 m-4 max-w-sm mx-auto">
                    <h2 className="text-xl font-semibold mb-2">{student.name}</h2>
                    <p className="text-gray-600 mb-1">Age: {student.age}</p>
                    <p className="text-gray-600 mb-1">Sex: {student.sex}</p>
                    <p className="text-gray-600 mb-1">Course: {student.course}</p>
                    <p className="text-gray-600 mb-1">Course Description: {student.courseDescription}</p>
                </div>
            ))}
        </div>
    );
}