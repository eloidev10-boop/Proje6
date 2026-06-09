import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
    <div>

      <h1>{teacher.fullName}</h1>
      <p>{teacher.subject}</p>
      <p>{teacher.bio}</p>

    </div>
  );
}
