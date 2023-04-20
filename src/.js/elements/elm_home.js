export default class ElmHome extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.init_html()
  };

  init_html() {
    let template = `${`\n      \n    `}`;
    return template
  }
};

ElmHome.TITLE = "DragonRuby Egg"