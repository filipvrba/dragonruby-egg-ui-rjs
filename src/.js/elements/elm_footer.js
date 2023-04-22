export default class ElmFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.init_html()
  };

  init_html() {
    let template = `${`
      <footer class='py-3 my-4'>
          <p class='text-center text-body-secondary my-1'>© 2023 Prototype for DragonRuby</p>
          <p class='text-center text-body-secondary'>
          Created by <a href='https://www.reddit.com/user/Intelligent-End-9399'>
            Intelligent-End-9399</a>
          </p>
      </footer>
    `}`;
    return template
  }
}