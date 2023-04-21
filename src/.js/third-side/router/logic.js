function route(event) {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handle_location()
};

async function handle_location() {
  let path = window.location.pathname;
  let html = window.routes[path] || window.routes["404"];
  document.getElementById("app").innerHTML = html
};

window.onpopstate = handle_location;
window.route = route;
handle_location()