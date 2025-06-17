import Welcome from "./Welcome";
import "./app.css"

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
      <Footer />
    </>
  );
}

function Profile(){
    return(
        <>
         <h3>Indhu</h3>
         <p>Software Developer</p>
         <img className="avatar" src="https://i.imgur.com/yXOvdOSs.jpg" alt="profile Image" />
        </>
    )
}

export default Layout;
