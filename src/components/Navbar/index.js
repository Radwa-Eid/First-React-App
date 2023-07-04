import "./navbar.css";

function Navbar() {
  return (
    <div className="container header">
      <div className="navbar">
        <div className="row">
          <div className="logo">
            <h1 className="logoHeading">
              Block
              <span className="logoHeading__colored">Chain</span>
            </h1>
          </div>
          <div className="navList">
            <ul className="row">
              <li className="listItem active">Home</li>
              <li className="listItem">Ads</li>
              <li className="listItem">About</li>
              <li className="listItem">Blog</li>
              <li className="listItem">Contact</li>
              <li className="listItem">Login</li>
              <li className="listItem">Register</li>
              <li className="listItem navBtn">+ Post an Add</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
