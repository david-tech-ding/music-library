const { expect } = require("chai");
const request = require("supertest");
const db = require("../src/db/");
const app = require("../src/app");

describe("create album", () => {
  let artist;
  beforeEach(async () => {
    const { rows } = await db.query(
      `INSERT INTO Artists (name, genre) VALUES ($1, $2) RETURNING *`,
      ["Tame Impala", "rock"]
    );
    artist = rows[0];
  });

  describe("POST/artists/{id}/albums", () => {
    it("creates an album associated with a specific artist", async () => {
      const id = artist.id;
      const { status, body } = await request(app)
        .post(`/artists/${id}/albums`)
        .send({ name: "My Personal Life", year: 2000 });

      expect(status).to.equal(201);
      expect(body.name).to.equal("My Personal Life");
      expect(body.year).to.equal(2000);

      const {
        rows: [albumData],
      } = await db.query(`SELECT * FROM Albums WHERE id = ${body.id}`);
      expect(albumData.name).to.equal("My Personal Life");
      expect(albumData.year).to.equal(2000);
      console.log(id);
      expect(albumData.artist_id).to.equal(id);
    });
  });
});
