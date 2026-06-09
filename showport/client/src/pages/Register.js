import { useState } from "react";
import axios from "axios";

export default function Register() {

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
  };

  return (
    <div>

      <h2>Register</h2>

      <input name="fullName" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" onChange={handleChange} />

      <button onClick={submit}>Register</button>

    </div>
  );
}
