const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class NotesController {
  async create(req, res) {
    console.log(req.body);
    const { title, description } = req.body;

    if (!title || !description) {
      throw new AppError("Preencha todos os campos");
    }

    const verifyNote = await knex("notes").where({ title }).first();

    if (verifyNote) {
      throw new AppError("Já existe uma nota com esse título");
    }

    await knex("notes").insert({ title, description });

    return res.status(201).json("Nota criada com sucesso");
  }

  async index(req, res) {
    const notes = await knex("notes").select("*");

    if (notes == "") {
      throw new AppError("Nenhuma nota encontrada");
    }

    for (let i = 0; i < notes.length; i++) {
      notes[i].status = notes[i].status ? "Concluído" : "Pendente";
    }

    return res.status(200).json(notes);
  }

  async delete(req, res) {
    const { id } = req.params;

    const note = await knex("notes").where({ id }).first();

    if (!note) {
      throw new AppError("Nota não encontrada");
    }

    const deletedNoted = await knex("notes").where({ id }).del();

    if (!deletedNoted) {
      throw new AppError("Erro ao deletar nota");
    }

    return res.status(200).json("Nota deletada com sucesso");
  }

  async update(req, res) {
    const { id } = req.params;

    const note = await knex("notes").where({ id }).first();

    if (!note) {
      throw new AppError("Nota não encontrada");
    }

    if (note.status == 1) {
      await knex("notes").where({ id }).update({ status: 0 });
      return res.status(200).json("Nota Desmarcada com sucesso");
    }

    await knex("notes").where({ id }).update({ status: 1 });

    return res.status(200).json("Nota Concluida");
  }
}

const notesController = new NotesController();

module.exports = notesController;
