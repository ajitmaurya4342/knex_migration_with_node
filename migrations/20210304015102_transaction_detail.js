
exports.up = async function (knex) {

    await knex.schema.createTable("transaction_detail", (table) => {
        table.increments("tr_id").primary();
        table.string("user_id", 45);
        table.bigInteger("amount", 15);
        table.text("point");
        table.text("payment_detail");
        table.text("payment_id");
        table.integer("created_by").defaultTo();
        table.integer("updated_by").defaultTo();
        table.datetime("created_at").defaultTo(knex.fn.now());
        table.datetime("updated_at").defaultTo(knex.fn.now());
    });



};

exports.down = async function (knex) {
    await knex.schema.dropTable("transaction_detail");
};
