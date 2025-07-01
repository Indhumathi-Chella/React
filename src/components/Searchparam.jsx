import { useSearchParams, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function RouteUserList() {
  return (
    <>
      <Routes>
        <Route path="users" element={<UserListApi />} />
      </Routes>
    </>
  );
}

function UserListApi() {
  const [searchparams, setSearchParams] = useSearchParams();
  const [users, setusers] = useState([]);

  const page = Number(searchparams.get("page")) || 1;

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users?_limit=3&_page=${page}`)
      .then((response) => {
        if (response.data.length === 0 && page > 1) {
          setSearchParams({ page: 1 });
        } else {
          setusers(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, [page]);
  function nextPage() {
    setSearchParams({ page: page + 1 });
  }

  function prevPage() {
    if (page > 1) {
      setSearchParams({ page: page - 1 });
    }
  }
  return (
    <>
      <h3>User List</h3>
      {users.length === 0 ? (
        <h4>No Data Found</h4>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      <button onClick={nextPage}>Next</button>
      <button onClick={prevPage}>Prev</button>
    </>
  );
}

export default RouteUserList;
