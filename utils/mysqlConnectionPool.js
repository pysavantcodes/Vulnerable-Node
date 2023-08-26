var mysql = require("mysql");
var config = require("../config/config");

var hostname = "kl3.h.filess.io";
var database = "dummysite2_happenedam";
var port = "3307";
var username = "dummysite2_happenedam";
var password = "c157b9e0aae57873e9dc1186b5a95fc8c83bf6c0";
var pool = mysql.createPool({
  connectionLimit: 10,
  host: hostname,
  user: username,
  password,
  database,
  port,
});

function executeQueryWithParam(query, parameters, callback) {
  return new Promise((resolve, reject) => {
    pool.query(query, parameters, (err, res) => {
      if (err) {
        return reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

function executeQuery(query) {
  return new Promise((resolve, reject) => {
    pool.query(query, (err, res) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(res);
      }
    });
  });
}

module.exports = {
  executeQueryWithParam: executeQueryWithParam,
  executeQuery: executeQuery,
};
