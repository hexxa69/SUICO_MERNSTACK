import StudentCard from "./components/studentcard.jsx";

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
    </div>
  );
}

export default App;