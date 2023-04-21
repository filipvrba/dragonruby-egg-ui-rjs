export default class Pages {
};
Pages.ERR_404 = `${`
  <div class='container row text-center align-items-center'>
    <div>
      <h1>404</h1>
      <p class='lead'>page not found</p>
    </div>
  </div>
  `}`;
Pages.HOME = `${`
  <div class='container py-5'>
    <elm-header ext='<code><p class='lead text-body'>dre install [module]</p></code>'></elm-header>
    <main>
      <elm-modules></elm-modules>
    </main>
    <elm-footer></elm-footer>
  </div>
  `}`;
Pages.MODULE_ADD = `${`\n  <div class='container py-5'>\n    <elm-header ext=`}${`></elm-header>
    <main>
      <elm-module-add></elm-module-add>
    </main>
    <elm-footer></elm-footer>
  </div>
  `}`