import knex from 'knex';
import path from 'path';


const database = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true, // isso faz o sql definir como nulo quando ele não conseguir definir qual é o conteúdo padrão pra um campo do banco
}); 

export default database;