
exports.up = async function (knex) {

    await knex.schema.table("m_level", (table) => {
        table.integer("timer").defaultTo(20);
      
    });

    // await knex.raw("update")

};

exports.down = async function (knex) {
    await knex.schema.table("m_level", (table) => {
        table.dropColumn("timer")
     
    });
};
