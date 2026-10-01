import StudentsCard from './StudentsCard.jsx';

function StudentsList({ filteredStudents }) {
    return (
        <>
            <p>
                {filteredStudents.length} students
            </p>
            <div className="students-container">
                {filteredStudents.map((student) => (
                    <StudentsCard
                        key={student.id}
                        name={student.firstName + ' ' + student.lastName}
                        image={student.image}
                        username={student.username}
                        email={student.email}
                        city={student.address.city}
                    />
                ))}
            </div>
        </>
    );
}

export default StudentsList;
