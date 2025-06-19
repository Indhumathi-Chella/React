import Welcome from "./Welcome";
import "./app.css";
import { CheckStatus, ProfileCard, Dashboard } from "./ConditionalRendering";
import { Details } from "./Props";
import { Timer, SwitchLight, ScrollLogger } from "./Effect";
import { Counter, FruitShow } from "./State";
import { useState } from "react";
import { MyButton, TextInput, CounterControl } from "./EventHandling";
import StudenList from "./RenderList";
import FeedbackForm from "./Form";
import TextInputs from "./InputState";
import { PasswordFeild, Form } from "./Accessibility";

function Header() {
  return <h1 className="header">Welcome to Profile!.</h1>;
}

function Content() {
  return <div>This is my profile.</div>;
}

function Footer() {
  return <p> Thank you for visiting.</p>;
}

function Layout() {
  return (
    <>
      <Welcome />
      <h1>this is a total content.</h1>
      <Header />
      <Content />
      <Profile />
      <UserList />
      <CheckStatus />
      <ProfileCard />
      <Details />
      <Counter />
      <FruitShow />
      <AppTimer />
      <SwitchLight />
      <ScrollLogger />
      <MyButton />
      <MyButton />
      <TextInput />
      <CounterControl />
      <Dashboard />
      <StudenList />
      <FeedbackForm />
      <TextInputs />
      <PasswordFeild />
      <Form />
      <Footer />
    </>
  );
}

function Profile() {
  return (
    <>
      <h3>Indhu</h3>
      <p>Software Developer</p>
      <img
        className="avatar"
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="profile Image"
      />
    </>
  );
}
const users = [
  { id: 1, name: "Zyan", profileUrl: "https://i.imgur.com/OKS67lhm.jpg" },
  { id: 2, name: "Ziva", profileUrl: "https://picsum.photos/200/300" },
];

function UserList() {
  return (
    <div>
      <h1>User's List</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <img
            src={user.profileUrl}
            alt={"image" + user.name}
            style={{ width: 100, height: 100, borderRadius: "50%" }}
          />
        </div>
      ))}
    </div>
  );
}

function AppTimer() {
  const [showTimer, setShowTimer] = useState(true);

  let sum = (a, b) => a + b;
  console.log(sum(2,3));
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
          alert("you click the counter");
        }}
      >
        Click
      </button>
      <p>{count}</p>

      <button onClick={() => setShowTimer((showTimer) => !showTimer)}>
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>

      {showTimer && <Timer />}
    </div>
  );
}

export default Layout;
