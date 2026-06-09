import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {

  const [teacher, setTeacher] = useState(null);

  useEffect(() => {

    const token = localStorage.getItem("token");

    axios.get("http://localhost:5000/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setTeacher(res.data));

  }, []);

  if (!teacher) return <p>Loading...</p>;

  return (
    <div style={{ padding: "40px" }}>

      <h1>Welcome {teacher.fullName}</h1>

      <p>Create and edit your portfolio here.</p>

    </div>
  );
}
