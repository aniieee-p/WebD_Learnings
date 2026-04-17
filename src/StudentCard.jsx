function StudentCard({ student }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '15px',
      margin: '10px',
      backgroundColor: '#f0f4f8',
      borderRadius: '8px',
      minWidth: '120px'
    }}>
      <p style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 'bold' }}>
        {student.name}
      </p>

      <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>
        Student
      </p>

      <div style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#b3d9e6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#333'
      }}>
        {student.grade}
      </div>
    </div>
  );
}

export default StudentCard;
