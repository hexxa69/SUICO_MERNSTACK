function Subjects({ SubjectCode, SubjectName, SubjectSchedule }) {
    return (
        <div className="text-center bg-blue-50 rounded-lg shadow-md p-10 m-4">
            <h3 className="text-lg font-bold">Subject Code: {SubjectCode}</h3>
            <p className="text-gray-600">Subject Name: {SubjectName}</p>
            <p className="text-gray-600">Schedule: {SubjectSchedule}</p>
        </div>
    );
}

export default Subjects;