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

const getAllAlbums = async (_, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM Albums");
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getAlbumById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      rows: [album],
    } = await db.query("SELECT * FROM Albums WHERE id =$1", [id]);

    if (!album) {
      return res.status(404).json({ message: `album ${id} does not exist` });
    }
    res.status(200).json(album);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const updateAlbumByPut = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, year } = req.body;
    const {
      rows: [album],
    } = await db.query(
      "UPDATE albums SET name = $1, year = $2 WHERE id = $3 RETURNING *",
      [name, year, id]
    );

    if (!album) {
      return res.status(404).json({ message: `artist ${id} does not exist` });
    }
    res.status(200).json(album);
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
};

const updateAlbumByPatch = async (req, res) => {
  const { id } = req.params;
  const { name, year } = req.body;

  let query, params;

  if (name && year) {
    query = "UPDATE albums SET name =$1, year =$2 WHERE id = $3 RETURNING *";
    params = [name, year, id];
  } else if (name) {
    query = "UPDATE albums SET name =$1 WHERE id = $2 RETURNING *";
    params = [name, id];
  } else if (year) {
    query = "UPDATE albums SET year =$1 WHERE id = $2 RETURNING *";
    params = [year, id];
  }

  try {
    const {
      rows: [album],
    } = await db.query(query, params);

    if (!album) {
      return res.status(404).json({ message: `album ${id} does not exist` });
    }
    res.status(200).json(album);
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
};

const deleteAlbum = async (req, res) => {
  const { id } = req.params;

  try {
    const {
      rows: [album],
    } = await db.query("DELETE FROM albums WHERE id = $1 RETURNING *", [id]);

    if (!album) {
      return res.status(404).json({ message: `album ${id} does not exist` });
    }
    res.status(200).json(album);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
module.exports = {
  createAlbum,
  getAllAlbums,
  getAlbumById,
  updateAlbumByPut,
  updateAlbumByPatch,
  deleteAlbum,
};
