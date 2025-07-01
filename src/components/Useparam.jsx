import { useParams, Route, Routes ,useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function RouteParam() {
  return (
    <>
      <Routes>
        <Route path="users/:userId" element={<UserProfile />} />
      </Routes>
    </>
  );
}

function UserProfile() {
  const {userId} = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function GetUser() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        setUser(response.data);
        setLoading(false);
      } catch (err) {
        setError("unable to fetch the user");
        setLoading(false);
      }
    }
    GetUser();
  }, [userId]);
  if (loading) return <p>Loading...</p>;
  return (
    <div style={{border:'2px solid black',width:200,padding:5,margin:5}}>
      <h3>User Profile</h3>
      <p>Name:{user.name}</p>
      <p>Email:{user.email}</p>
      <p>Company:{user.company.name}</p>
    </div>
  );
}

function NavigationExample(){
    const navigate = useNavigate();

    function Goto(){
        navigate("/users/2")
    }

    return(
        <>
        <button onClick={Goto}>Go to user 2</button>
        <button onClick={() => navigate(-1)}>Back</button>
        </>
    )
}


export {RouteParam,NavigationExample};