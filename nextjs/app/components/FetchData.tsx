import { useEffect, useState } from 'react';

const FetchData = () => {
  // const API_URL = 'https://dummyjson.com/users';
  const API_URL = 'http://localhost:3000/user/data';
  const [userData, setUserData] = useState([]);
  async function apiCall() {
    const response = await fetch(API_URL);
    const data = await response.json();
    setUserData(data);
  }
  useEffect(() => {
    apiCall();
  }, []);
  console.log(userData);
  return (
    <div>
      <h1>Fetching Data from the API...</h1>
    </div>
  );
};
export default FetchData;
