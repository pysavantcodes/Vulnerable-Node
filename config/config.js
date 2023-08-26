var config = {
  DATABASE_HOST: process.env.DATABASE_HOST
    ? process.env.DATABASE_HOST
    : "localhost",
  DATABASE_NAME: process.env.DATABASE_NAME
    ? process.env.DATABASE_NAME
    : "vuln_node_app_db",
  DATABASE_USER: process.env.DATABASE_USER ? process.env.DATABASE_USER : "root",
  DATABASE_PASS: process.env.DATABASE_PASS ? process.env.DATABASE_PASS : "uwak123%%",
};

module.exports = config;
