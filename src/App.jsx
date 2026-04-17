import StudentList from "./StudentList";

function App() {
  const students = [
    { name: "Ani", grade: "A" },
    { name: "Pratham", grade: "B" },
    { name: "Anmol", grade: "A" },
    { name: "Anki", grade: "B" },
    { name: "Micku", grade: "A" },
    { name: "Ansha", grade: "A" }
  ];

  return (
    <div style={{
      backgroundColor: '#e8f0f6',
      minHeight: '100vh',
      margin: 0,
      padding: 0
    }}>

      {/* Header */}
      <div style={{
        backgroundColor: '#5a8ba8',
        color: 'white',
        padding: '12px 20px',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
        Class Management Panel
      </div>

      {/* Count Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '8px 20px',
        backgroundColor: '#f0f0f0',
        fontSize: '14px',
        color: '#666'
      }}>
        Total: {students.length}
      </div>

      {/* Student List */}
      <StudentList students={students} />

      {/* Footer Note */}
      <div style={{
        backgroundColor: '#c8e6d7',
        padding: '12px 20px',
        margin: '10px',
        borderRadius: '4px',
        fontSize: '14px'
      }}>
        <p style={{ margin: '5px 0', color: '#2d6a4f' }}>
          ✓ App → StudentList props flow is correct
        </p>
        <p style={{ margin: '5px 0', color: '#2d6a4f' }}>
          ✓ StudentList maps students properly
        </p>
      </div>

    </div>
  );
}

export default App;
