const db = require('../database/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    remove,
    findSavedStrains,
    editSavedStrains
}
function find() {
    return (
         db('users')
            .select('strain') 
    )
        
}
function findBy(filter) {
    return (
        db('users')
            .select('strain')
            .where(filter)
    )
}
function findById(id) {
    return (
        db('users')
            .where({ id })
            .first()
    )
}
function findSavedStrains(id) {
    return (
        db('users')
            .where({ id })
            .first()
            .select('strain')
    )
}
function editSavedStrains(id, data) {
    return (
        db('users')
            .where({ id })
            .first()
    )
}
function remove() {
    return (
        db('users')
            .where('id', id)
            .del()
    )
}