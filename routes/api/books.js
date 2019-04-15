const router = require("express").Router();

const booksController = require("../../controllers/bookControllers");

//Route for "/api/books"

router
    .route("/")
    .get(booksController.findAll)
    .post(booksController.create);

// Route for "/api/books/:id"

router.route("/:id").delete(booksController.remove);

module.exports = router;