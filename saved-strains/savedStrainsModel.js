const db = require('../database/dbConfig');

module.exports = {
    find,
    findBy,
    findByStrainId,
    add,
    remove
}
function find(id) {
    return (
         db('user_strains')
            .where({ id })
            .first()
            .select('strain') 
    )      
}
function findBy(id, filter) {
    return (
        db('user_strains')
            .where({ id })
            .first()
            .select('strain')
            .where(filter)
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

function remove(id, strainId) {
    return (
        db('user_strains')
            .where({ id })
            .where({ strainId })
            .del()
    )
}