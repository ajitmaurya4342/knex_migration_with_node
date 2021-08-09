
exports.up = async function (knex) {

    await knex.schema.table("settings", (table) => {
        table.integer("rewardPoint").defaultTo(30);
      
    });

    // await knex.raw("update")

};

exports.down = async function (knex) {
    await knex.schema.table("settings", (table) => {
        table.dropColumn("rewardPoint")
     
    });
};
