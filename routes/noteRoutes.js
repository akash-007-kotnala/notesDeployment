const express = require("express");
const {
  getNotes,
  createNote,
  getNoteById,
  updateNote,
  deleteNote,
} = require("../controllers/notesController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
//const registerUser = require("../controllers/userController");

router.route("/").get(protect, getNotes);
router.route("/create").post(protect, createNote);
router
  .route("/:id")
  .get(getNoteById)
  .put(protect, updateNote)
  .delete(protect, deleteNote);

//post then controller inside in it.

module.exports = router;
