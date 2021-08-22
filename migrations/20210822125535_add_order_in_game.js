
exports.up = async function (knex) {

    await knex.schema.table("m_game", (table) => {
        table.integer("is_order").defaultTo(0);
      
    });

    // await knex.raw("update")

};

exports.down = async function (knex) {
    await knex.schema.table("m_game", (table) => {
        table.dropColumn("is_order")
     
    });
};
