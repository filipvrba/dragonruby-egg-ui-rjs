export default class Net {
  static get_json(url, callback) {
    fetch(url).then(response => response.json()).then((data) => {
      if (data.status == Net.SQL_ERR) {
        console.error(`Sql raised error ${data.status_code} for '${url}' query.`);
        if (callback) return callback([])
      } else if (callback) {
        return callback(data)
      }
    })
  }
};

Net.SQL_ERR = "SQL Error"