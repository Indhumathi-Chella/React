export default function StudenList() {
  const students = [
    { id: 1, name: "Indhu", grade: "A" },
    { id: 2, name: "Kavin", grade: "A" },
    { id: 3, name: "Varun", grade: "C" },
  ];

  return (
    <>
      <h2>Rendering List</h2>
      <ul>
        {students.map((student, index) => (
          <li
            key={student.id}
            style={{ color: student.grade == "A" ? "green" : "maroon" }}
          >
            Name: {student.name} and Grade: {student.grade}
          </li>
        ))}
      </ul>
    </>
  );
}
