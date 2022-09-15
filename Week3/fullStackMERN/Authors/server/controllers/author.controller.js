const Author = require("../models/author.model");

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json({ results: newAuthor }))
        .catch(err => res.status(400).json({err: err}))
}

module.exports.allAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json({ results: allAuthors }))
        .catch(err => res.json({ message: "Something went wrong!", error: err }))
}

module.exports.oneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(displayOne => res.json({ results: displayOne }))
        .catch(err => res.json({ message: "Something went wrong!", error: err }))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deletedAuthor => res.json({ results: deletedAuthor}))
        .catch(err => res.json({ message: "Something went wrong!", error: err }))
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedAuthor => res.json({ results: updatedAuthor }))
        .catch(err => res.status(400).json({err: err}))
}