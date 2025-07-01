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
import { PasswordField, Form } from "./Accessibility";
import { ThemeProvider } from "./Context";
import { GreetingLayout } from "./ErrorBoundary";
import { Display, DisplayInput, InputFocus, VideoPlayer } from "./Reference";
import { FragmentComponet, MultipleComponent } from "./Fragment";
import { DisplayPortal, ViewPortal } from "./Portal";
import ProfilerExample from "./Profiler";
import DisplayJsx from "./WithoutJsx";
import { AppName } from "../StrictMode";
import { CustomCounter, InputValue } from "./Uncontrolled";
import MyCustom from "./CustomElement";
import { CounterTitle, ProfileName } from "./StateExample";
import { LiveClock } from "./EffectHook";
import { StopWatch } from "./RefHooks";
import Sum from "./MemoHook";
import ButtonCounter from "./Callbackhook";
import ComplexCounter from "./Reducerhook";
import { SearchList, SearchLists } from "./Transition";
import { CounterComponent, UserData } from "./Customhook";
import BoxWidth from "./LayoutEffect";
import { UpdateName } from "./Serverfunction";
import DisplayGreet from "./LazyLoading";
import Mode from "./Use";
import CreateUser from "./UserManagement/CreateUser";
import DisplayUser from "./UserManagement/DisplayUser";
import {DashboardLayout, Navbar, ShowCurrentPath} from "./navbar";
import {RouteParam,  NavigationExample } from "./Useparam";
import RouteUserList from "./Searchparam";
import ProtectedExample from "./ProtectedRoute";
import CounterRedux from "./Reduxcounter";

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
      {/* <AppTimer /> */}
      <SwitchLight />
      {/* <ScrollLogger /> */}
      <MyButton />
      <MyButton />
      <TextInput />
      <CounterControl />
      <Dashboard />
      <StudenList />
      <FeedbackForm />
      <TextInputs />
      <PasswordField />
      <Form />
      <ThemeProvider />
      <GreetingLayout />
      <InputFocus />
      <DisplayInput />
      <Display />
      <MultipleComponent />
      <FragmentComponet />
      <DisplayPortal />
      <ViewPortal />
      <ProfilerExample />
      <DisplayJsx />
      <VideoPlayer />
      <AppName />
      <InputValue />
      <MyCustom />
      <CounterTitle />
      <ProfileName />
      <LiveClock />
      <StopWatch />
      <Sum />
      <ButtonCounter />
      <ComplexCounter />
      <SearchList items={["Indhu", "Arun", "Revi", "Janu"]} />
      <SearchLists items={["Indhu", "Arun", "Revi", "Janu"]} />
      <CounterComponent />
      <CustomCounter />
      <UserData />
      <BoxWidth />
      <UpdateName />
      <DisplayGreet />
      <Mode />
      <CreateUser />
      <DisplayUser />
      <Navbar />
      <DashboardLayout />
      <ShowCurrentPath />
      <RouteParam />
      <NavigationExample />
      <RouteUserList />
      <ProtectedExample />
      <div>
        <CounterRedux />
      </div>
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
  console.log(sum(2, 3));
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
