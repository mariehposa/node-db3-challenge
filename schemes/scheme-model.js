const db = require('../data/dbConfig')

function find(){
    // db.select('*').from("schemes")
    return db('schemes')
}

function findById(id) {
    return db('schemes as s')
    .where('s.id', id)
}

function findSteps(id){
    return db.select('st.id', 's.scheme_name', 'st.step_number', 'st.instructions')
    .from('schemes as s')
    .where('s.id', id)
    .join('steps as st')
    .where('st.scheme_id', id)
    .orderBy('st.step_number')
}

function add (scheme) {
    return db('schemes')
    .insert(scheme)
    .then(([id]) => this.findById(id)) //to get the whole body by id
}

function update(changes, id) {
    return db ('schemes as s')
    .where('s.id', id)
    .update(changes)
    .then(count => count ? this.findById(id) : null)
}

function remove(id){
    return db('schemes as s')
    .where('s.id', id)
    .del()
    .then(count => count > 0 ? count : null)
}

function addStep(step, scheme_id){
    return db ('steps as t')
    .insert({
        'scheme_id': scheme_id,
        ...step
    })
    .then(([id]) => id ? id : null)
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
}