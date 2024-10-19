import { Central as Layout } from "@/layouts";
import "./NotFound.style.scss";

function NotFound() {
  return (
    <Layout title={"Page Not Found"}>
      <div className="not-found-container">
      <h1>404</h1>
      <p>Page not found.</p>
      <button
            className="Login__panel__button"
            onClick={() => window.location.href = "/"}
          >
            Go Back
      </button>

      </div>
    </Layout>
  );
}

export default NotFound;
