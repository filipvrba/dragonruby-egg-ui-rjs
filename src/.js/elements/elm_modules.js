export default class ElmModules extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.get_title("<elm-spinner></elm-spinner>");

    database.query(
      "select * from modules",
      modules => this.innerHTML = this.init_html(modules)
    );

    window.add_module = this.add_module.bind(this)
  };

  init_html(modules) {
    let l_trs = () => {
      let trs = "";

      modules.forEach((_module) => {
        let tr = `${`
          <tr>
            <th scope='row'>    
              <a href='${_module.github_url}' target='_blank'>
                <p class='fa fa-github my-0'></p>
                <span class='mx-2'>
                ${_module.name}
                </span>
              </a>
            </th>
            <td>${_module.description}</td>
            <td style='text-align: center;'>${_module.author}</td>
          </tr>
        `}`;
        trs += tr
      });

      return trs
    };

    let t_add = `${`
      <a onclick='add_module()'>
        <p class='mb-0 fa fa-plus'></p>
        Add
      </a>
    `}`;
    let template = this.get_title(t_add);

    if (modules.length > 0) {
      template = `${`
      ${this.get_title()}
      <table class='table'>
        <thead>
          <tr>
            <th style='width: 30%; text-align: left;' scope='col'>
              ${t_add}
            </th>
            <th style='width: 60%;' scope='col'>Description</th>
            <th style='text-align: center;' scope='col'>Author</th>
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
  };

  add_module() {
    change_page("module_add")
  }
}