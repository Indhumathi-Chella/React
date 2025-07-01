import {
  Route,
  Routes,
  Link,
  Outlet,
  NavLink,
  Navigate,
  useLocation,
} from "react-router-dom";
import DisplayUser from "./UserManagement/DisplayUser";
import CreateUser from "./UserManagement/CreateUser";



function Navbar() {
  return (
    <div>
      <nav>
        <Link
          to="/dashboard/about"
          style={{
            margin: 5,
            textDecoration: "none",
            fontSize: "14px",
            color: "black",
          }}
        >
          About
        </Link>
        {" | "}
        <Link
          to="/dashboard/users"
          style={{
            margin: 5,
            textDecoration: "none",
            fontSize: "14px",
            color: "black",
          }}
        >
          Users
        </Link>
        {" | "}
        {/* <Link to="/dashboard/create">Create</Link> */}
        <NavLink
          to="/dashboard/create"
          style={({ isActive }) => ({
            color: isActive ? "green" : "black",
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          {" "}
          Create{" "}
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="about" element={<h1>User Crud operation</h1>} />
          <Route path="users" element={<DisplayUser />} />
          <Route path="create" element={<CreateUser />} />
        </Route>
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </div>
  );
}
function Home() {
  return <Navigate to="/dashboard/create" />;
}
function DashboardLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

function ShowCurrentPath(){
  let location = useLocation();
  return (
    <>
    <h3>Current Path : {location.pathname}</h3>
     {/* <h3>Current Fragments: {location.hash}</h3>
      <h3>Current unique key: {location.key}</h3>
       <h3>Current state: {location.state}</h3>
        <h3>Current query param : {location.search}</h3> */}
    </>
  )
}
export { Navbar, DashboardLayout ,ShowCurrentPath};
