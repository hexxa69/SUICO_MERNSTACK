import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home.jsx";
import Students from "./pages/Students.jsx";
import StudentDetails from "./pages/StudentDetails.jsx";
import Navbar from "./components/Navbar.jsx";
import AddStudent from "./pages/AddStudent.jsx";
import Teacher from "./pages/teachers.jsx";
import teacherData from "./data/teacher.json";
import studentData from "./data/students.json";
import AddTeacher from "./pages/AddTeacher.jsx";
import TeacherDetails from "./pages/Teacherdetails.jsx";

function App() {
  const [students, setStudents] = useState(studentData);
  const [teachers, setTeachers] = useState(teacherData);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Students students={students} />} />
        <Route path="/students" element={<Students students={students} />} />
        <Route path="/student/:id" element={<StudentDetails students={students} />} />
        <Route
          path="/add-student"
          element={<AddStudent students={students} setStudents={setStudents} />}
        />
        <Route path="/teacher" element={<Teacher teachers={teachers} />} />
        <Route path="/teachers" element={<Teacher teachers={teachers} />} />
        <Route path="/teacher/:id" element={<TeacherDetails teachers={teachers} />} />
        <Route
          path="/add-teacher"
          element={<AddTeacher teachers={teachers} setTeachers={setTeachers} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;