function Subjects({ subjectcode, subjectname, subjectschedule }) {
    return (
        <div className="text-center bg-blue-50 rounded-lg shadow-md p-10 m-4">
            <h3 className="text-lg font-bold">Subject Code: {subjectcode}</h3>
            <p className="text-gray-600">Subject Name: {subjectname}</p>
            <p className="text-gray-600">Schedule: {subjectschedule}</p>
        </div>
    );
}

export default Subjects;