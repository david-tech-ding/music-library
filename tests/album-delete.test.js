const { expect } = require("chai");
const request = require("supertest");
const db = require("../src/db");
const app = require("../src/app");

describe("Delete Artist", () => {
  let artist, album;
  beforeEach(async () => {
    const artistRes = await db.query(
      "INSERT INTO Artists (name, genre) VALUES( $1, $2) RETURNING *",
      ["Tame Impala", "rock"]
    );

    artist = artistRes.rows[0];

    const albumRes = await db.query(
      "INSERT INTO Albums (name, year, artist_id) VALUES ($1, $2, $3) RETURNING *",
      ["My Life", 2000, artist.id]
    );

    album = albumRes.rows[0];
  });

  describe("DELETE /album/{id}", () => {
    it("deletes the album and returns the deleted data", async () => {
      const { status, body } = await request(app)
        .delete(`/albums/${album.id}`)
        .send();

      expect(status).to.equal(200);

      expect(body).to.deep.equal({
        id: album.id,
        name: "My Life",
        year: 2000,
        artist_id: artist.id,
      });
    });

    it("returns a 404 if the album does not exist", async () => {
      const { status, body } = await request(app)
        .delete("/albums/999999999")
        .send();

      expect(status).to.equal(404);
      expect(body.message).to.equal("album 999999999 does not exist");
    });
  });
});
