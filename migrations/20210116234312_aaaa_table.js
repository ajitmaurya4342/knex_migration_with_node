
exports.up = async function(knex) {

    await knex.schema.createTable("ms_image_gallery", (table) => {
        table.increments("image_id").primary();
        table.string("menu_name", 45);
        table.string("category", 45);
        table.string("image_size", 45);
        table.integer("image_height").defaultTo();
        table.integer("image_width").nullable();
        table.text("base_url", "longtext");
        table.text("image_path", "longtext");
        table.string("image_name", 45);
        table.string("image_description", 100);
        table.enu("image_is_active", ["Y", "N"]);
        table.integer("created_by").defaultTo();
        table.integer("updated_by").defaultTo();
        table.datetime("created_at").defaultTo(knex.fn.now());
        table.datetime("updated_at").defaultTo(knex.fn.now());
      });
    
  
};

exports.down = async function(knex) {
    await knex.schema.dropTable("ms_image_gallery");
};
