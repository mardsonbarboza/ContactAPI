const knex = require('../database/connection');

class Contact {
    async findAll() {
        return knex.select('*').from('contact');
    }

    async findById(id) {
        return knex.select('*').from('contact').where('id', id).first();
    }

    async findByEmail(email) {
        return knex.select('*').from('contact').where('email', email).first();
    }

    async findByName(name) {
        return knex.select('*').from('contact').where('name', 'like', `%${name}%`);
    }

    async contact(name, email, telephone, address, birthday) {
        return knex('contact').insert({ name, email, telephone, address, birthday });
    }

    async contactUpdate(id, name, email, telephone, address, birthday) {
        return knex('contact').where('id', id).update({ name, email, telephone, address, birthday });
    }

    async contactDelete(id) {
        return knex('contact').where('id', id).del();
    }
}

module.exports = new Contact();


module.exports = new Contact()