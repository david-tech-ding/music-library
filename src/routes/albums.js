const express = require("express");
const albumController = require("../controllers/albums");
const albumRouter = express.Router();

albumRouter.post("/:id/albums", albumController.createAlbum);
albumRouter.get("/", albumController.getAllAlbums);
albumRouter.get("/:id", albumController.getAlbumById);
albumRouter.put("/:id", albumController.updateAlbumByPut);
albumRouter.patch("/:id", albumController.updateAlbumByPatch);

module.exports = albumRouter;
