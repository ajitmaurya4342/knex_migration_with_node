
exports.up = async function (knex) {

    await knex.schema.createTable("m_questions", (table) => {
        table.increments("question_id").primary();
        table.text("question");
        table.string("question_type", 45); //image or text
        table.text("options");//A,b,c
        table.text("correct_options");
        table.enu("question_is_active", ["0", "1"]);//l for active 
        table.integer("created_by").defaultTo();
        table.integer("updated_by").defaultTo();
        table.datetime("created_at").defaultTo(knex.fn.now());
        table.datetime("updated_at").defaultTo(knex.fn.now());
    });

};

exports.down = async function (knex) {
    await knex.schema.dropTable("m_questions");
};
