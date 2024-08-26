import { useEffect, useState } from "react";
import SendInputDataToBackend from "./components/SendInputDataToBackend";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsersData();
  }, []);

  async function fetchUsersData() {
    try {
      const response = await fetch("http://localhost:3000/api/users");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching users data:", error);
    }
  }

  console.log(users);

  return (
    <div>
      <h1>Frontend In ReactJS</h1>
      <SendInputDataToBackend />
    </div>
  );
};

export default App;
