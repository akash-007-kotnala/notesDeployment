//import the models
const asyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");

const getNotes = asyncHandler(async (req, res) => {
  //mogodb query now.

  //to give user's id. so we need to create middleware.
  const notes = await Note.find({ user: req.user._id });
  res.json(notes);
});

const createNote = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  if (!title || !content || !category) {
    res.status(400);
    throw new Error("Please fill all the fields!");
  } else {
    //This req.user._id == is conmming from middleware as we are set it there
    //req.user =  await User.findById(decoded.id).select("-password");
    const note = new Note({ user: req.user._id, title, content, category });

    //we are saving in database.
    const createNote = await note.save();

    res.status(201).json(createNote);
  }
});

const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Note is not found" });
  }
});

const updateNote = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;
  const note = await Note.findById(req.params.id);

  if (note.user.toString() != req.user._id.toString()) {
    res.status(401);
    throw new Error("You cant perform this action  of update!");
  }
  if (note) {
    note.title = title;
    note.content = content;
    note.category = category;

    //note to be saved in the database.
    const updatedNote = await note.save();

    res.json(updatedNote);
  } else {
    res.status(404);
    throw new Error("Note is not found!!");
  }
});

const deleteNote = asyncHandler(async (req, res) => {
  //we have to use await function as it is been intracting with the database.
  const note = await Note.findById(req.params.id);

  //if the note belong to the user
  if (note.user.toString() != req.user._id.toString()) {
    res.status(401);
    throw new Error("You cannot perform this operations of delete !");
  }
  if (note) {
    //we have to intract with database hence we will use await functions.

    await note.remove();
    res.json({ message: "Note is removed" });
  } else {
    res.status(404);
    throw new Error("Note does not found");
  }
});

module.exports = { getNotes, createNote, getNoteById, updateNote, deleteNote };
