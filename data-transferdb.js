const backend = require('backend.js');
const pg = require('pg');

const sample = loadJSON('sample.json');

const users = {
  database: cilph,
  host: 'localhost',
  user: 'KupidoExportLLC'
};

const pool = new pg.Pool(users);

pool.connect(function(err, client, done){
  client.query(`INSERT INTO users(first_name, last_name, email, message) VALUES ("$1, $2, $3, $4", {backend.info.name, backend.info.last, backend.info.email})`, function(err, result){
    console.log(err);
    console.log(result.rows);
    done();
  });

});

pool.end();
