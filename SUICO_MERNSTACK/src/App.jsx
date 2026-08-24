import StudentCard from "./components/studentcard.jsx";
import Subjects from "./components/subjects.jsx";

function App() {
 return (
    <div className="App">
      <h1 className="text-center text-2xl font-bold mb-4">Student Information</h1>
      <StudentCard 
        name="Bryan Suico"
        age={20}
        bday="2006-01-15"
        studentNum="202404436"
        course="Information Technology"
      />
      <StudentCard
        name="Charles Nodalo"
        age={23}
        bday="2003-05-10"
        studentNum="202400926"
        course="Information Technology"
      />
      <StudentCard
        name="Harvey Baysac"
        age={20}
        bday="2006-08-20"
        studentNum="202400123"
        course="Information Technology"
      />
      <h1 className="text-center text-2xl font-bold mb-4">Subject Information</h1>
      <Subjects
        SubjectCode="IT101"
        SubjectName="Introduction to Information Technology"
        SubjectSchedule="Monday, Wednesday, Friday - 9:00 AM to 10:30 AM"
      />
      <Subjects
        SubjectCode="IT102"
        SubjectName="Data Structures and Algorithms"
        SubjectSchedule="Tuesday, Thursday - 1:00 PM to 2:30 PM"
      />
      <Subjects
        SubjectCode="IT103"
        SubjectName="Database Management Systems"
        SubjectSchedule="Monday, Wednesday - 3:00 PM to 4:30 PM"
      />
    </div>
  );
}

export default App;