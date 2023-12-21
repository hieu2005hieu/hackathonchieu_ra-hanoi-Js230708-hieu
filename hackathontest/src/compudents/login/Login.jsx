import React, { useState } from "react";
import "../login/Login.scss";
import { useNavigate } from "react-router-dom";
import publicAxios from "../../config/publicAxios";
export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const hanldInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handlLogin = async () => {
    if (input.email == "" || input.password == "") {
      alert("Không Được Để Trống");
    } else {
      try {
        const response = await publicAxios.post("/login", input);
        localStorage.setItem("token", response.data.token);
        alert(response.data.message);
        navigate("/products");
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };
  return (
    <div className="img">
      <div className="h1">
        <h1>ĐĂNG NHẬP</h1>
      </div>
      <div className="container2">
        <div className="main">
          <p>Email:</p>
          <input type="text" name="email" onChange={hanldInput}  placeholder="Email...."/>
          <p>Password:</p>
          <input type="text" name="password" onChange={hanldInput} placeholder="Password...."/> <br />
          <button onClick={handlLogin}>Dăng Nhập</button>
        </div>
      </div>
    </div>
  );
}
