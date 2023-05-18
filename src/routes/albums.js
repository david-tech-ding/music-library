const express = require("express");
const albumController = require("../controllers/albums");
const albumRouter = express.Router();

albumRouter.post("/:id/albums", albumController.createAlbum);
albumRouter.get("/albums", albumController.getAllAlbums);

module.exports = albumRouter;
