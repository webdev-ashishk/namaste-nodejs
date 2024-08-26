import { useState } from "react";

export default function SendInputDataToBackend() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [city, setCity] = useState(null);
  function handleSendData() {
    let formData = {
      users: user,
      emails: email,
      cities: city,
    };
    console.log(formData);

    fetch("http://localhost:3000/handlefrontenddata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  }

  return (
    <div>
      <hr />
      <h1>send input data to backend !</h1>
      <div className="send-input-data">
        <label>
          UserName:{" "}
          <input
            type="text"
            name="text"
            id="userName"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="user name ..."
          />
        </label>
        <br />
        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            id="userEmail"
            value={email}
            placeholder="email ..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>{" "}
        <br />
        <label htmlFor="cityName">CityName: </label>
        <input
          type="text"
          name="city"
          id="cityName"
          value={city}
          placeholder="city name ..."
          onChange={(e) => setCity(e.target.value)}
        />
        <br />
        <button onClick={handleSendData}>send data to backend </button>
      </div>
    </div>
  );
}
