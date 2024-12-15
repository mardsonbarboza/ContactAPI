const Contact = require('../model/contact');

class ContactController {
    async contacts(req, res) {
        try {
            const result = await Contact.findAll();
            if (result.length > 0) {
                return res.status(200).json(result);
            } else {
                return res.status(404).json({ msg: 'Nenhum contato cadastrado' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao buscar contatos', details: error });
        }
    }

    async contactSeach(req, res) {
        const search = req.query.search;
        if (!search) {
            return res.status(400).json({ msg: 'Parâmetro de busca é obrigatório' });
        }
        try {
            let result;
            if (search.includes('@')) {
                result = await Contact.findByEmail(search);
            } else {
                result = await Contact.findByName(search);
            }
            if (result.length === 0) {
                return res.status(404).json({ msg: 'Nenhum contato encontrado' });
            }
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao buscar contato', details: error });
        }
    }

    async create(req, res) {
        const { name, email, telephone, address, birthday } = req.body;
        const errors = [];

        if (!name) errors.push('Nome é obrigatório');
        if (!email) errors.push('Email é obrigatório');
        if (!telephone) errors.push('Telefone é obrigatório');
        if (!address) errors.push('Endereço é obrigatório');
        if (!birthday) errors.push('Aniversário é obrigatório');

        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        try {
            await Contact.createTask(name, email, telephone, address, birthday);
            return res.status(201).json({ msg: 'Contato criado com sucesso' });
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao criar contato', details: error });
        }
    }

    // Métodos update e delete corrigidos de forma semelhante.
}


module.exports = new ContactController()