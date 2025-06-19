const userStatus = {
  name: "indhu",
  working: true,
};

function CheckStatus() {
  return (
    <>
      <h2>
        {userStatus.name} -{" "}
        <span style={{ color: userStatus.working ? "green" : "gray" }}>
          {" "}
          {userStatus.working ? "online" : "offline"}
        </span>{" "}
      </h2>
    </>
  );
}

const students = [
  {
    id: 1,
    name: "Arun",
    profileUrl: "https://picsum.photos/200/300",
    ispassed: true,
  },
  {
    id: 2,
    name: "Kavi",
    profileUrl: "https://picsum.photos/200/300",
    ispassed: true,
  },
  {
    id: 3,
    name: "Deepthi",
    profileUrl: "https://picsum.photos/200/300",
    ispassed: false,
  },
];

function ProfileCard() {
  return (
    <>
      <h1>Student Details</h1>
      {students.map((student) => (
        <div key={student.id}>
          <h3>Name:{student.name}</h3>
          <img
            src={student.profileUrl}
            alt={"image" + student.name}
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              border: `2px solid ${student.ispassed ? "green" : "red"}`,
            }}
          />
          <p style={{ color: student.ispassed ? "green" : "red" }}>
            Result : {student.ispassed ? "Pass" : "Fail"}
          </p>
        </div>
      ))}
    </>
  );
}

function Dashboard() {
  let isloggedIn = true;
  let role = "user";
  let isPremium = false;

  let greeting;
  if (isloggedIn) {
    greeting = <h4>Welcome Back!</h4>;
  } else {
    greeting = <h4>Please log in to continue..</h4>;
  }
  return (
    <div>
      <h2>Conditional Rendering</h2>
      {greeting}
      <p>you are logged in as: {role == "admin" ? "Admin" : "User"}</p>
      {isPremium && <p>you are a premium member</p>}
    </div>
  );
}

export { ProfileCard, CheckStatus, Dashboard };
