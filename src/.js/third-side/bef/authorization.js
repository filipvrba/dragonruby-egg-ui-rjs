import Net from "./net";

export default class Authorization {
  get_github_access_token(code, callback) {
    let uri = `${env.VITE_URL_API}/github/access_token?client_id=${env.VITE_CLIENT_ID}&database=${env.VITE_DATABASE}&code=${code}&scope=${env.VITE_SCOPE}`;
    Net.get_json(uri, (data) => {if (callback) callback(data)})
  };

  get_github_data(url, github_result, callback) {
    this.get_json(url, github_result, (data) => {
      if (callback) callback(data)
    })
  };

  get_json(url, github_result, callback) {
    fetch(
      url,
      {headers: {authorization: `${github_result.token_type} ${github_result.access_token}`}}
    ).then(response => response.json()).then((data) => {
      if (data.message) {
        console.error(`GET: ${data.message}`);
        if (callback) return callback([])
      } else if (callback) {
        return callback(data)
      }
    })
  };

  github_callback(callback) {
    let url_params = new URLSearchParams(location.search);
    let code = url_params.get("code");

    if (code) {
      authorization.get_github_access_token(code, (result) => {
        window.history.replaceState(null, null, "/");

        if (result.scope.indexOf(env.VITE_SCOPE) > -1) {
          sessionStorage.setItem("access_token", result.access_token);
          if (callback) callback(result)
        }
      })
    } else if (callback) {
      callback(null)
    }
  }
}