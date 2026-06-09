import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "40px" }}>

      <h1>ShowPort</h1>

      <p>
        Build and showcase professional teacher portfolios.
      </p>

      <div style={{ marginTop: "20px" }}>

        <Link to="/register">
          <button>Create Portfolio</button>
        </Link>

        <Link to="/teachers">
          <button style={{ marginLeft: "10px" }}>
            Browse Teachers
          </button>
        </Link>

      </div>

    </div>
  );
}
