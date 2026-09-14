import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/AddStudent">Add Student</Link></li>
      </ul>
    </nav>
  );
}