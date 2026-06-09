import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Teachers() {

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/teachers")
      .then(res => setTeachers(res.data));
  }, []);

  return (
    <div style={{ padding: "40px" }}>

      <h1>Teachers</h1>

      {teachers.map(t => (
        <div key={t._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>

          <h3>{t.fullName}</h3>
          <p>{t.subject}</p>

          <Link to={`/teacher/${t._id}`}>
            View Profile
          </Link>

        </div>
      ))}

    </div>
  );
}
