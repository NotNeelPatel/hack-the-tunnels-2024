import { Link } from "react-router-dom";
import "./HeaderLinks.style.scss";
import { useAccountContext } from "@/context";

function HeaderLinks() {
  const { logout } = useAccountContext();
  return (
    <div className="HeaderLinks">
      <img src="menu.png"/><Link to={"/"}>Return To Menu</Link>|
      <img src="home.png"/><Link to={"/sitemap"}>Site Map</Link>|
      <img src="help.png"/><Link to={"/help"}>Help</Link>|
      <img src="logout.png"/><Link to={"/login"}>
        <span onClick={() => logout()}>Logout</span>
      </Link>
    </div>
  );
}

export default HeaderLinks;
