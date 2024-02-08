const mysql = require('mysql2/promise');
const { Pool } = require('pg');

async function execute(sql){
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'digital_store',
        port: 3307
    });

    const [result] = await connection.query(sql);

    return result;
}

const connectionPG = new Pool({
    connectionString: "postgres://museu_user:avYgsLJn5ndx51AxNK1p647XXLuAulhE@dpg-cn1q28ud3nmc73bpmc0g-a.oregon-postgres.render.com/museu_db",
    ssl: {
        rejectUnauthorized: false
    }
});

const executePG = async (sql) => await connectionPG.query(sql);

module.exports = {
    execute,
    executePG
}