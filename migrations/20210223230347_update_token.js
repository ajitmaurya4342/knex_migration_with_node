
exports.up = async function (knex) {

    await knex.schema.table("m_user", (table) => {
        table.text("token").after("uuid")

    })

};

exports.down = function (knex) {

};
