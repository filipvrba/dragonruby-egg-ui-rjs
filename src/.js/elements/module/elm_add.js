import Github from "../../github";

export default class ElmModuleAdd extends HTMLElement {
  constructor() {
    super();
    window.click_module_add = this.click_module_add.bind(this);
    window.change_module_add = this.change_module_add.bind(this);
    this.innerHTML = this.get_title("<elm-spinner></elm-spinner>");
    Github.user_data(d => this.init_forms(d))
  };

  init_forms(data) {
    this.innerHTML = this.init_html(data.repos);
    this._author = data.login;
    this._repository = document.getElementById("repository");
    this._description = document.getElementById("description");
    this._btn_add = document.getElementById("btn_add");
    this.change_module_add()
  };

  init_html(repos) {
    let l_options = () => {
      let result = "";

      repos.forEach(repo => (
        result += `<option value='${repo.url}'>${repo.name}</option>\n`
      ));

      return result
    };

    return `${`
    ${this.get_title()}
    <div class='container' style='width: 60%;'>
      <div class='input-group mb-3'>
        <label class='input-group-text' for='repository'>Repository</label>
        <select class='form-select' id='repository' oninput='change_module_add()'>
          <option selected>${ElmModuleAdd.REPO_EMPTY_VALUE}</option>
          ${l_options.call()}
        </select>
        <div class='invalid-feedback'>
          The module is already added.
        </div>
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

  get_title(ext="") {
    return `${`
    <div class='text-center py-3'>
      <h2>Add a module</h2>
      ${ext}
    </div>
    `}`
  };

  click_module_add() {
    if (confirm("Do you really want to add this module?")) {
      let repository_name = this._repository.options[this._repository.selectedIndex].text;

      database.query(
        `SELECT author, name FROM modules WHERE author='${this._author}' AND name='${repository_name}'`,

        (data) => {
          if (data.length == 0) {
            let inset_query = `INSERT INTO modules (author, name, github_url, description, created_at) VALUES ('${this._author}', '${repository_name}', '${this._repository.value}', '${this._description.value}', ${Time.unix()})`;

            database.query(inset_query, (is_ok) => {
              if (is_ok) change_page("home")
            })
          } else {
            this._repository.classList.add("is-invalid")
          }
        }
      )
    }
  };

  change_module_add() {
    let is_empty = false;

    if (this._repository.value == ElmModuleAdd.REPO_EMPTY_VALUE || this._description.value == "") {
      is_empty = true
    };

    this._btn_add.disabled = is_empty;

    if (this._repository.classList.value.indexOf("is-invalid") > -1) {
      this._repository.classList.remove("is-invalid")
    }
  }
};

ElmModuleAdd.GITHUB_REGEX_HEAD = /^https:\/\/github.com\/([a-zA-Z0-9\-\_]{1,255})\//m;
ElmModuleAdd.GITHUB_REGEX_TAIL = /[a-zA-Z0-9\-\_]{1,100}(.git)?$/m;
ElmModuleAdd.REPO_EMPTY_VALUE = "Choose..."