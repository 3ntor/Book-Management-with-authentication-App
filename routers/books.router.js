const Router = require('express')
const bookController = require('../controllers/books.controller')
const authntication = require('../middlewares/auth') // Middlewre
const router = Router()

router.get('/api/book/:id', authntication, bookController.getOneBook) // Private get one book           // done //
router.post('/api/books', authntication,  bookController.addOneBook) // Private add new book            // done
router.get('/api/books', authntication, bookController.getAllBooks) // Private get all books            // done
router.put('/api/book/:id', authntication, bookController.editOneBook) // Private update one book       // done //
router.delete('/api/books/:id', authntication, bookController.deleteOneBook) // Private delete one book // done



module.exports = router