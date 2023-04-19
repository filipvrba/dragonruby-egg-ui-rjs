export default class ElmModules extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.init_html()
  };

  connectedCallback() {};
  disconnectedCallback() {};

  init_html() {
    let template = `${`
      <table class='table'>
        <thead>
          <tr style='width: 31%; text-align: left;'>
            <th scope='col'>
            <a href='${ElmModules.LINK_ADD}'>
              <p class='mb-0 fa fa-plus'></p>
                Add
              </a>
            </th>
            <th scope='col'>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Mark</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Jacob</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Larry the Bird</td>
          </tr>
        </tbody>
      </table>
    `}`;
    return template
  }
};

ElmModules.LINK_ADD = ""