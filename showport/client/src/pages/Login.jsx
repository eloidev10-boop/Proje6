import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const nav = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      form
    );

    localStorage.setItem("token", res.data.token);

    alert("Login successful");

    nav("/dashboard");
  };

  return (
    <form onSubmit={submit} style={{ padding: "40px" }}>

      <h2>Login</h2>

      <input name="email" placeholder="Email" onChange={handleChange} />
      <br />

      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <br />

      <button>Login</button>

    </form>
  );
}
