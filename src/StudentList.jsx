import StudentCard from "./StudentCard";

function StudentList({ students }) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '0'
    }}>
      {students.map((student, index) => (
        <StudentCard key={index} student={student} />
      ))}
    </div>
  );
}

export default StudentList;
