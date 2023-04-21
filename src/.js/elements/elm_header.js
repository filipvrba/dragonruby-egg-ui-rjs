export default class ElmHome extends HTMLElement {
  constructor() {
    super();
    this._ext = this.getAttribute("ext");
    this.innerHTML = this.init_html()
  };

  init_html() {
    let template = `${`
      <header>
        <div class='pricing-header p-3 pb-md-4 mx-auto text-center'>
          <a onclick='change_page("home")'>
            <h1 class='display-4 fw-normal'>${ElmHome.TITLE}</h1>
          </a>
          ${this._ext}
        </div>
      </header>
    `}`;
    return template
  }
};

ElmHome.TITLE = "DragonRuby Egg"