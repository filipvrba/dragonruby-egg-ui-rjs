import "../css/bootstrap.min.css";
import "../css/style.css";
import "./constants";
import "./env";
import "./pages";
import "./third_side";
import "./elements";
import "./github";

authorization.github_callback(auth_result => (
  auth_result ? change_page("module_add") : change_page("home")
))