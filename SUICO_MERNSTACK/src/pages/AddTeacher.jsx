import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddTeachers({ teachers }) {
    const [name, setName] = useState("");
    const [employeenumber, setEmployeeNumber] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [department, setDepartment] = useState("");
    const [sex, setSex] = useState("");
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Add Teacher</h1>
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm"
                onSubmit={(e) => {
                    e.preventDefault();

                    navigate("/teacher");
                    const newTeacher = {
                        id: teachers.length + 1,
                        name,
                        employeenumber,
                        specialization,
                        department,
                        sex
                    };
                    teachers.push(newTeacher);
                    setName("");
                    setEmployeeNumber("");
                    setSpecialization("");
                    setDepartment("");
                    setSex("");
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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employeenumber">
                        Employee Number
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="employeenumber"
                        type="text"
                        placeholder="Enter employee number"
                        onChange={(e) => setEmployeeNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="specialization">
                        Specialization
                    </label>
                    <select id="specialization" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setSpecialization(e.target.value)} required>
                        <option value="">Select Specialization</option>
                        <option value="Game Development">Game Development</option>
                        <option value="Programming">Programming</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="App Development">App Development</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
                        Department
                    </label>
                    <select id="department" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setDepartment(e.target.value)} required>
                        <option value="">Select Department</option>
                        <option value="DIT">DIT</option>
                        <option value="BFC">BFC</option>
                    </select>
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
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add Teacher
                    </button>
                </div>
            </form>
        </div>
    );
}