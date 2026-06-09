import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function TeacherProfile() {

  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/teachers/${id}`)
      .then(res => setTeacher(res.data));
  }, [id]);

  if (!teacher) return <p>Loading...</p>;

  return (
    <div style={{ padding: "40px" }}>

      <h1>{teacher.fullName}</h1>

      <p><b>Subject:</b> {teacher.subject}</p>
      <p><b>School:</b> {teacher.school}</p>
      <p><b>Experience:</b> {teacher.experience}</p>

      <p><b>Bio:</b> {teacher.bio}</p>

      <h3>Skills</h3>
      <ul>
        {teacher.skills?.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

    </div>
  );
}
