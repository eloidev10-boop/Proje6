import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>

      <h1>ShowPort</h1>

      <p>Teacher Portfolio Platform</p>

      <Link to="/register">
        <button>Create Portfolio</button>
      </Link>

      <Link to="/teachers">
        <button style={{ marginLeft: "10px" }}>
          Browse Teachers
        </button>
      </Link>

    </div>
  );
}
