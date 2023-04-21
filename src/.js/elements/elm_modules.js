export default class ElmModules extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<elm-spinner></elm-spinner>";

    database.query(
      "select author, name, description from modules",
      modules => this.innerHTML = this.init_html(modules)
    )
  };

  connectedCallback() {};
  disconnectedCallback() {};

  init_html(modules) {
    let l_trs = () => {
      let trs = "";

      modules.forEach((_module) => {
        let tr = `${`
          <tr>
            <th scope='row'>${_module.author}.${_module.name}</th>
            <td>${_module.description}</td>
          </tr>
        `}`;
        trs += tr
      });

      return trs
    };

    let l_title = ext => (
      `${`
      <div class='text-center py-3'>
        <h2>Modules</h2>
        ${ext}
      </div>
      `}`
    );

    let template = l_title(`${`
      <a href='${ElmModules.LINK_ADD}'>
        <p class='mb-0 fa fa-plus'></p>
        Add
      </a>
    `}`);

    if (modules.length > 0) {
      template = `${`
      ${l_title("")}
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
          ${l_trs.call()}
        </tbody>
      </table>
      `}`
    };

    return template
  }
};

ElmModules.LINK_ADD = "/module/add"