export default class ElmModules extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.get_title("<elm-spinner></elm-spinner>");

    database.query(
      "select * from modules",
      modules => this.innerHTML = this.init_html(modules)
    )
  };

  init_html(modules) {
    let l_trs = () => {
      let trs = "";

      modules.forEach((_module) => {
        let tr = `${`
          <tr>
            <th scope='row'>    
              <a href='${_module.github_url}'>
                <p class='fa fa-github my-0'></p>
                <span class='mx-2'>
                  ${_module.name}
                </span>
              </a>
            </th>
            <td>${_module.description}</td>
          </tr>
        `}`;
        trs += tr
      });

      return trs
    };

    let template = this.get_title(`${`
      <a href='${ElmModules.LINK_ADD}'>
        <p class='mb-0 fa fa-plus'></p>
        Add
      </a>
    `}`);

    if (modules.length > 0) {
      template = `${`
      ${this.get_title()}
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
  };

  get_title(ext="") {
    return `${`
      <div class='text-center py-3'>
        <h2>Modules</h2>
        ${ext}
      </div>
      `}`
  }
};

ElmModules.LINK_ADD = "/module/add"