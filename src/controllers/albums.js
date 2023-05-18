const db = require("../db/index");

const createAlbum = async (req, res) => {
  const { name, year } = req.body;
  const { id } = req.params;

  try {
    const {
      rows: [album],
    } = await db.query(
      `INSERT INTO Albums (name, year, artist_id) VALUES ($1, $2, $3) RETURNING *`,
      [name, year, id]
    );
    res.status(201).json(album);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const readAlbum = async (req, res) => {};

module.exports = {
  createAlbum,
  readAlbum,
};
