import Net from "./third-side/bef/net";
import { ENV } from "./env";

export default class Github {
  static user_data(callback) {
    let access_token = sessionStorage.getItem("access_token");
    let scopes = [];
    let github_result = {token_type: "bearer", access_token};

    authorization.get_json(
      "https://api.github.com/user",
      github_result,

      (user) => {
        if (user.length == 0) {
          sessionStorage.setItem("access_token", null);
          location.assign(`https://github.com/login/oauth/authorize?scope=${ENV.VITE_SCOPE}&client_id=${ENV.VITE_CLIENT_ID}`)
        } else {
          Net.get_json(user.repos_url, (repos) => {
            let data = {login: user.login, repos: []};
            repos.forEach(repo => data.repos.push({name: repo.name, url: repo.html_url}));
            if (callback) callback(data)
          })
        }
      }
    )
  }
}