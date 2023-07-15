const routes = require("express").Router();

const NotesController = require("../controller/NotesController");

routes.post("/notes", NotesController.create);
routes.get("/notes", NotesController.index);
routes.delete("/notes/:id", NotesController.delete);
routes.put("/notes/:id", NotesController.update);
module.exports = routes;
