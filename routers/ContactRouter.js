const express = require('express');
const router = express.Router();
const ContactController = require('../controller/ContactController');

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Lista todos os contatos cadastrados
 *     responses:
 *       200:
 *         description: Retorna uma lista de contatos.
 *       404:
 *         description: Nenhum contato cadastrado.
 *       500:
 *         description: Erro no servidor.
 */
router.get('/contacts', ContactController.contacts);

/**
 * @swagger
 * /contact:
 *   post:
 *     summary: Cria um novo contato
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - telephone
 *               - address
 *               - birthday
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               telephone:
 *                 type: string
 *               address:
 *                 type: string
 *               birthday:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Contato criado com sucesso.
 *       400:
 *         description: Campos obrigatórios não preenchidos.
 *       500:
 *         description: Erro no servidor.
 */
router.post('/contact', ContactController.create);

/**
 * @swagger
 * /contact/{id}:
 *   put:
 *     summary: Atualiza um contato existente pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               telephone:
 *                 type: string
 *               address:
 *                 type: string
 *               birthday:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Contato atualizado com sucesso.
 *       400:
 *         description: Erro na validação dos dados.
 *       404:
 *         description: Contato não encontrado.
 *       500:
 *         description: Erro no servidor.
 */
router.put('/contact/:id', ContactController.update);

/**
 * @swagger
 * /contact/{id}:
 *   delete:
 *     summary: Remove um contato existente pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Contato deletado com sucesso.
 *       404:
 *         description: Contato não encontrado.
 *       500:
 *         description: Erro no servidor.
 */
router.delete('/contact/:id', ContactController.delete);

/**
 * @swagger
 * /contact/search:
 *   get:
 *     summary: Busca um contato pelo nome ou e-mail
 *     parameters:
 *       - in: query
 *         name: search
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contato(s) encontrado(s).
 *       400:
 *         description: Parâmetro de busca é obrigatório.
 *       404:
 *         description: Nenhum contato encontrado.
 *       500:
 *         description: Erro no servidor.
 */
router.get('/contact/search', ContactController.contactSeach);

/**
 * @swagger
 * /contact/{id}:
 *   get:
 *     summary: Busca um contato pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Contato encontrado.
 *       404:
 *         description: Contato não encontrado.
 *       500:
 *         description: Erro no servidor.
 */
router.get('/contact/:id', ContactController.seachContactId);

module.exports = router;
