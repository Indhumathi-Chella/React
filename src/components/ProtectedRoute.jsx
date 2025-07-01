import { Children } from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";

const user = true;
function Home() {
  return <h1>Welcome, this is the Home page.</h1>;
}

function Login() {
  return <h2>This is the Login page.</h2>;
}

function Profile() {
  return <h2>This is the Profile page (protected).</h2>;
}

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

function ProtectedExample() {
  return (
    <>
      <nav style={{ margin: 20 }}>
        <Link to="/home" style={linkStyle}>
          Home
        </Link>
        <Link to="/login" style={linkStyle}>
          Login
        </Link>
        <Link to="/profile" style={linkStyle}>
          Profile
        </Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

const linkStyle = {
  margin: 5,
  textDecoration: "none",
  fontSize: "14px",
  color: "yellow",
  padding: 10,
  backgroundColor: "black",
};
export default ProtectedExample;
