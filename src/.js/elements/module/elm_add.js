export default class ElmModuleAdd extends HTMLElement {
  constructor() {
    super();
    window.click_module_add = this.click_module_add.bind(this);
    window.change_module_add = this.change_module_add.bind(this);
    this.innerHTML = this.init_html();
    this._module_name = document.getElementById("module_name");
    this._github_url = document.getElementById("github_url");
    this._description = document.getElementById("description");
    this._btn_add = document.getElementById("btn_add");
    this.change_module_add()
  };

  init_html() {
    return `${`
    <div class='text-center py-3'>
      <h2>Add a module</h2>
    </div>
    <div class='container' style='width: 60%;'>
      <div class='input-group input-group-sm mb-3'>
        <span class='input-group-text' id='inputGroup-sizing-sm'>Module name</span>
        <input id='module_name' type='text' class='form-control' onchange='change_module_add()' aria-label='Module name' aria-describedby='inputGroup-sizing-sm'>
      </div>
      <div class='input-group input-group-sm mb-3'>
        <span class='input-group-text' id='inputGroup-sizing-sm'>GitHub URL</span>
        <input id='github_url' type='text' class='form-control' onchange='change_module_add()' aria-label='GitHub URL' aria-describedby='inputGroup-sizing-sm'>
      </div>
      <div class='input-group input-group-sm mb-3'>
        <span class='input-group-text'>Description</span>
        <textarea id='description' class='form-control' onchange='change_module_add()' aria-label='Description' maxlength='150'></textarea>
      </div>
    </div>
    <div class='text-center'>
      <button id='btn_add' class='btn btn-primary mb-3' style='width: 25%;' onclick='click_module_add()'>Add</button>
    </div>
    `}`
  };

  click_module_add() {
    database.query("SELECT name FROM modules", (data) => {
      // database.query(inset_query) do |data|
      // end
      // TODO: print error for existing name module
      if (data.length == 0) {
        let inset_query = `INSERT INTO modules (author, name, github_url, description, created_at) VALUES ('filip', '${this._module_name.value}', '${this._github_url.value}', '${this._description.value}', ${Time.unix()})`;
        console.log(inset_query)
      }
    })
  };

  change_module_add() {
    let is_empty = false;

    if (this._module_name.value == "" || this._github_url.value == "" || this._description.value == "") {
      is_empty = true
    };

    this._btn_add.disabled = is_empty
  }
}