const { expect } = require("chai");
const request = require("supertest");
const db = require("../src/db");
const app = require("../src/app");

describe("Read Artists", () => {
  let artists, albums;
  beforeEach(async () => {
    const responses = await Promise.all([
      db.query(
        "INSERT INTO Artists (name, genre) VALUES( $1, $2) RETURNING *",
        ["Tame Impala", "rock"]
      ),
      db.query(
        "INSERT INTO Artists (name, genre) VALUES( $1, $2) RETURNING *",
        ["Kylie Minogue", "pop"]
      ),
      db.query(
        "INSERT INTO Artists (name, genre) VALUES( $1, $2) RETURNING *",
        ["Tame Antelope", "jazz"]
      ),
    ]);

    artists = responses.map(({ rows }) => rows[0]);

    const albumsRes = await Promise.all([
      db.query(
        "INSERT INTO Albums (name, year, artist_id) VALUES ($1, $2, $3) RETURNING *",
        ["My Personal Life", 2000, 1]
      ),
      db.query(
        "INSERT INTO Albums (name, year, artist_id) VALUES ($1, $2, $3) RETURNING *",
        ["My Teenage Years", 2012, 2]
      ),
      db.query(
        "INSERT INTO Albums (name, year, artist_id) VALUES ($1, $2, $3) RETURNING *",
        ["My Adult Years", 2023, 3]
      ),
    ]);
    albums = responses.map(({ rows }) => rows[0]);
  });

  describe("GET /albums", () => {
    it("returns all album records in the database", async () => {
      const { status, body } = await request(app).get("/artists").send();

      expect(status).to.equal(200);
      expect(body.length).to.equal(3);

      body.forEach((albumRecord) => {
        const expected = albums.find((a) => a.id === albumRecord.id);

        expect(albumRecord).to.deep.equal(expected);
      });
    });
  });

  describe("GET /albums/{id}", () => {
    it("returns the artist with the correct id", async () => {
      const { status, body } = await request(app)
        .get(`/artists/${artists[0].id}`)
        .send();

      expect(status).to.equal(200);
      expect(body).to.deep.equal(artists[0]);
    });

    it("returns a 404 if the artist does not exist", async () => {
      const { status, body } = await request(app)
        .get("/artists/999999999")
        .send();

      expect(status).to.equal(404);
      expect(body.message).to.equal("artist 999999999 does not exist");
    });
  });
});
