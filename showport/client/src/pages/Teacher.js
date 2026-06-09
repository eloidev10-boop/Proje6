import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Teachers() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/teachers")
      .then(res => setData(res.data));
  }, []);

  return (
    <div>

      <h2>Teachers</h2>

      {data.map(t => (
        <div key={t._id}>

          <h3>{t.fullName}</h3>

          <Link to={`/teacher/${t._id}`}>
            View Profile
          </Link>

        </div>
      ))}

    </div>
  );
}
