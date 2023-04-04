exports.up = knex => knex.schema.createTable("categories", table => {
    table.increments("id")
    table.text("name")
})

exports.down = knex => knex.schema.dropTable("categories")