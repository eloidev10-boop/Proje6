import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>

      <Link to="/">Home</Link> |
      <Link to="/teachers"> Teachers</Link> |
      <Link to="/login"> Login</Link>

    </nav>
  );
}
