const db = require('../database/dbConfig');

module.exports = {
    find,
    findRow,
    findBy,
    findByStrainId,
    add,
    remove
}
function find(user_Id) {
    return (
         db('user_strains')
            .where({ user_Id })
            .join('strains', 'user_strains.strain_id', 'strains.id')
            .select('strain') 
    )      
}
function findBy(user_Id, filter) {
    return (
        db('user_strains')
            .where({ user_Id })
            .join('strains', 'user_strains.strain_id', 'strains.id')
            .where(filter)
            .select('strain')
    )
}
function findByStrainId(user_Id, strain_Id) {
    return (
        db('user_strains')
            .where(user_Id)
            .join('strains', 'user_strains.strain_id', 'strains.id')
            .where(strain_Id)
            .select('strain')
    )
}
function findRow(row) {
    return (
        db('user_strains')
            .where(row.user_Id)
            .where(row.strain_Id)
    )
}
function add(row) {
    return (
        db('user_strains')
            .insert(row)
            // .then(ids => {
            //     const [id] = ids;
            //     return findById(id)
            // })
    )
}
function remove(user_Id, strainId) {
    return (
        db('user_strains')
            .where({ user_Id })
            .where({ strainId })
            .del()
    )
}