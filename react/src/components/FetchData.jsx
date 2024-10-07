import { useEffect, useState } from 'react';
// const API_URL = 'https://dummyjson.com/users';
const API_URL = 'http://localhost:3000/user/data';
const FetchData = () => {
  const [userData, setUserData] = useState([]);
  async function apiCall() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      throw new Error('ERROR :: ' + error.message);
    }
  }
  useEffect(() => {
    apiCall();
  }, []);
  console.log(userData);
  return (
    <div>
      <p>fetch data from API...</p>
    </div>
  );
};
export default FetchData;
