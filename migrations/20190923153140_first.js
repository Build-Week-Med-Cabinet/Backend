
exports.up = function(knex) {
    return (
        knex.schema
        .createTable('users', tbl => {
            tbl
                .increments()
            tbl
                .string('username', 128)
                .notNullable()
                .unique()
            tbl
                .string('password', 128)
                .notNullable()
        })
        .createTable('savedStrains', tbl => {
            tbl
                .increments()
            tbl
                .string('strain')
                .notNullable()
        })
    )   
};
  
exports.down = function(knex) {
    return (
        knex.schema
            .dropTableIfItExists('users')
    )
};

//recent searches saved to users