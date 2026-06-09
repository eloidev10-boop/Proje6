import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const nav = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/auth/register", form);

    alert("Account created");

    nav("/login");
  };

  return (
    <form onSubmit={submit} style={{ padding: "40px" }}>

      <h2>Register Teacher</h2>

      <input name="fullName" placeholder="Full Name" onChange={handleChange} />
      <br />

      <input name="email" placeholder="Email" onChange={handleChange} />
      <br />

      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <br />

      <button>Create Account</button>

    </form>
  );
}
