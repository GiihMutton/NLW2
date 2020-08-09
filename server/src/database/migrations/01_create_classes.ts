import Knex from 'knex';

export async function up(knex: Knex) { //quais alterações queremos realizar no banco
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE'); //no caso do professor se desligar da plataforma, as aulas dele serão deletadas
    });

}

export async function down(knex: Knex) { //se der errado, como corrigir/remover o que foi criado
    return knex.schema.dropTable('classes');

}