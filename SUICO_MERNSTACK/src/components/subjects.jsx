function subjectCard({subjectCode, subjectName, schedule}) {
    return (
        <div className="bg-red-100 shadow-md rounded-lg p-4 m-4 max-w-sm mx-auto" >
            <h2 className="text-xl font-semibold mb-2">{subjectName}</h2>
            <p className="text-gray-600 mb-1">{subjectCode}</p>
            <p className="text-gray-600 mb-1">{schedule}</p>
        </div>
    );
}

export default subjectCard;