exports.up = async function (knex) {
  await knex.schema.createTable("u_transaction_logs", (table) => {
    table.increments("tr_log_id").primary();
    table.string("user_id", 45);
    table.bigInteger("amount", 15);
    table.text("payment_detail");
    table.text("payment_id");
    table.text("txnId");
    table.text("status");
    table.datetime("created_at").defaultTo(knex.fn.now());
    table.datetime("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("u_transaction_logs");
};
