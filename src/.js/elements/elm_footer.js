export default class ElmFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.init_html()
  };

  init_html() {
    let template = `${`
      <footer class='py-3 my-4'>
          <span class='nav justify-content-center border-bottom pb-3 mb-3'></span>
          <p class='text-center text-body-secondary'>© 2023 Prototype for DragonRuby</p>
          <p class='text-center text-body-secondary'>
          Created by <a href='https://www.reddit.com/user/Intelligent-End-9399'>
            Intelligent-End-9399</a>
          </p>
      </footer>
    `}`;
    return template
  }
}