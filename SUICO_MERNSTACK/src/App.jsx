import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Students from './pages/Students';
import StudentDetails from './pages/StudentDetails';
import Navbar from './components/Navbar';
import AddStudent from './pages/AddStudent';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/student/:id" element={<StudentDetails />} />
        <Route path="/addstudent" element={<AddStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;