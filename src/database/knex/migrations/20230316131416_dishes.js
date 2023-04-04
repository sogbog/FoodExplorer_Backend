exports.up = knex => knex.schema.createTable("dishes", table => {
    table.increments("id")
    table.text("avatar")
    table.text("name")
    table.integer("category_id").references("id").inTable("categories").onDelete("CASCADE")
    table.text("ingredients")
    table.integer("price")
    table.text("description")
})

exports.down = knex => knex.schema.dropTable("dishes")