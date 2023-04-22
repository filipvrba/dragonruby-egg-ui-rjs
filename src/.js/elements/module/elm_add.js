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
        <span class='input-group-text' id='inputGroup-sizing-sm'>GitHub URL</span>
        <input id='github_url' type='text' class='form-control' oninput='change_module_add()' aria-label='GitHub URL' aria-describedby='inputGroup-sizing-sm'>
        <div class='invalid-feedback'>Invalid page for GitHub repository.</div>
      </div>
      <div class='input-group input-group-sm mb-3'>
        <span class='input-group-text'>Description</span>
        <textarea id='description' class='form-control' oninput='change_module_add()' aria-label='Description' maxlength='150'></textarea>
      </div>
    </div>
    <div class='text-center'>
      <button id='btn_add' class='btn btn-primary' style='width: 25%;' onclick='click_module_add()'>Add</button>
    </div>
    `}`
  };

  click_module_add() {
    if (confirm("Do you really want to add this module?")) {
      if (new RegExp(ElmModuleAdd.GITHUB_REGEX_HEAD.source + ElmModuleAdd.GITHUB_REGEX_TAIL.source).exec(this._github_url.value)) {
        let module_name = this._github_url.value.replace(
          ElmModuleAdd.GITHUB_REGEX_HEAD,
          ""
        ).replace(".git", "");

        database.query(
          `SELECT name FROM modules WHERE name='${module_name}'`,

          (data) => {
            if (data.length == 0) {
              let inset_query = `INSERT INTO modules (author, name, github_url, description, created_at) VALUES ('none', '${module_name}', '${this._github_url.value}', '${this._description.value}', ${Time.unix()})`;

              database.query(inset_query, (is_ok) => {
                if (is_ok) change_page("home")
              })
            } else {
              this._module_name.classList.add("is-invalid")
            }
          }
        )
      } else {
        this._github_url.classList.add("is-invalid")
      }
    }
  };

  change_module_add() {
    let is_empty = false;

    if (this._github_url.value == "" || this._description.value == "") {
      is_empty = true
    };

    this._btn_add.disabled = is_empty;

    if (this._github_url.classList.value.indexOf("is-invalid") > -1) {
      this._github_url.classList.remove("is-invalid")
    }
  }
};

ElmModuleAdd.GITHUB_REGEX_HEAD = /^https:\/\/github.com\/([a-zA-Z0-9\-\_]{1,255})\//m;
ElmModuleAdd.GITHUB_REGEX_TAIL = /[a-zA-Z0-9\-\_]{1,100}(.git)?$/m