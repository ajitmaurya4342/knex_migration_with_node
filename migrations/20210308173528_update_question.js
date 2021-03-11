
exports.up = async function (knex) {

    await knex.schema.table("m_questions", (table) => {
        table.text("new_question_url");
        table.enu("is_url_change", ["0", "1"]).defaultTo("0");//l for active 
    });

    // await knex.raw("update")

};

exports.down = async function (knex) {
    await knex.schema.table("m_questions", (table) => {
        table.dropColumn("new_question_url")
        table.dropColumn("is_url_change");//l for active 
    });
};
