import Net from "./net";

export default class Database {
  constructor(name) {
    this._name = name
  };

  get(query, callback) {
    let query_encode = encodeURIComponent(query);
    let uri = `${env.VITE_URL_API}?token=${env.VITE_BEF_CLIENT}&database=${env.VITE_DATABASE}&query=${query_encode}`;
    Net.get_json(uri, (data) => {if (callback) callback(data)})
  }
}