import "../css/bootstrap.min.css";
import "../css/style.css";
import "./env";
import "./third_side";
import "./elements";
document.querySelector("#app").innerHTML = `${`
<div class='container py-5'>
  <elm-home></elm-home>
</div>
`}`