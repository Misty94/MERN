const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
    app.post("/api/author/new", AuthorController.createAuthor);
    app.get("/api/authors/all", AuthorController.allAuthors);
    app.put("/api/author/update/:id", AuthorController.updateAuthor);
    app.get("/api/author/:id", AuthorController.oneAuthor);
    app.delete("/api/author/delete/:id", AuthorController.deleteAuthor);
}