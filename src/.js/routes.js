import Pages from "./pages";

window.routes = {
  "404": Pages.ERR_404,
  "/": Pages.HOME,
  "/module/add": Pages.MODULE_ADD
}