
exports.up = async function (knex) {

    await knex.schema.table("m_user", (table) => {
        table.integer("is_notification_sent").defaultTo(0);
      
    });

    // await knex.raw("update")

};

exports.down = async function (knex) {
    await knex.schema.table("m_user", (table) => {
        table.dropColumn("is_notification")
     
    });
};
