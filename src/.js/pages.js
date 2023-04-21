const ERR_404 = `${`
<div class='container row text-center align-items-center'>
  <div>
    <h1>404</h1>
    <p class='lead'>page not found</p>
  </div>
</div>
`}`;
const HOME = `${`
<div class='container py-5'>
  <elm-header ext='<code><p class='lead text-body'>dre install [module]</p></code>'></elm-header>
  <main>
    <elm-modules></elm-modules>
  </main>
  <elm-footer></elm-footer>
</div>
`}`;
const MODULE_ADD = `${`\n<div class='container py-5'>\n  <elm-header ext=`}${`></elm-header>
  <main>
    <elm-module-add></elm-module-add>
  </main>
  <elm-footer></elm-footer>
</div>
`}`;

function change_page(name) {
  let page = ERR_404;

  switch (name) {
  case "home":
    page = HOME;
    break;

  case "module_add":
    page = MODULE_ADD
  };

  document.getElementById("app").innerHTML = page
};

window.change_page = change_page