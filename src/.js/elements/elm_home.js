export default class ElmHome extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.init_html()
  };

  init_html() {
    let template = `${`
      <main>
        <div class='pricing-header p-3 pb-md-4 mx-auto text-center'>
            <h1 class='display-4 fw-normal'>${ElmHome.TITLE}</h1>
            <code>
              <p class='lead text-body'>dre install [module]</p>
            </code>
        </div>
        <elm-modules></elm-modules>
      </main>
    `}`;
    return template
  }
};

ElmHome.TITLE = "DragonRuby Egg"