const bookModel = require('../models/books.model')
exports.getOneBook = async function(req,res) {
    try {
        const book = await bookModel.findById(req.params.id)
        res.json({message: "Done" , data: book})
    } catch(err){
        res.status(400).send({
            message: err
        })
    }
}

exports.getAllBooks = async function(req,res) {
    try {
        const books = await bookModel.find()
        res.json({message: "Done" , data: books})
    } catch(err){
        res.status(400).send({
            message: err
        })
    }
}

exports.addOneBook = async function(req,res) {
    try {
        const createBook = await bookModel.create(req.body)
        res.json({message: "Book Created" , data: createBook})

    } catch(err){
        res.status(400).send({
            message: err
        })
    }
}

exports.editOneBook = async function(req, res) {
    try {
        if (req.user.role === 'Admin') {
            const updatedBook = await bookModel.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            
            res.json({ message: "Book Updated", data: updatedBook });
        } else {
            res.status(403).send({
                message: 'You don’t have access to edit a book. You need to be an admin.'
            });
        }
    } catch (err) {
        res.status(400).send({
            message: err.message || err
        });
    }
}
exports.deleteOneBook = async function(req,res) {
    try {
        if(req.user.role === 'Admin') {
            await bookModel.findByIdAndDelete(req.params.id)
            res.json({message: "Book deleted" , data: []})
        } else {
            res.status(403).send({
                message: 'You Dont have access to delete a book you need to be an admin'
            })
        }


    } catch(err){
        res.status(400).send({
            message: err
        })
    }
}