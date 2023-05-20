# Backend app - Music Library

This app was created with `@command-shift/create-backend-app`. It is a music library API created with the CRUD REST API operations using Node.js, Express, Mocha-Chai, pgAdmin, and Postman.

## Concepts of the app

- Database migration and design
- PostgreSQL
- Creating and building databases in Docker container
- Creating APIs with CRUD operations on databases
- Integration testing with Mocha, Chai, and supertest
- Using Postman to manage API requests
- Nodemon to automatically restart app whenever changes are made to code
- Using .dotenv to secure sensitive information

## Getting started

Fork and clone the repo, then run the following commands. Use pgAdmin and Postman to check whether CRUD operations and REST APIs are working

```bash
npm test # to test the code
npm start # to start the app at http://localhost:3000
```

## API Endpoints

### Artist

<details>
<summary><code>POST</code> <code><b>/artists</b></code> <code>add a new artist</code></summary>

#### Parameters and body content

> | Parameters | Body                          |
> | ---------- | ----------------------------- |
> | None       | name [string], genre [string] |

#### Responses

> | code  | description          |
> | ----- | -------------------- |
> | `201` | successful operation |

</details>

<details>
<summary><code>GET</code> <code><b>/artists</b></code> <code>find all artists</code></summary>

#### Parameters and body

> None

#### Responses

> | code  | description          |
> | ----- | -------------------- |
> | `200` | successful operation |

</details>

<details>
<summary><code>GET</code> <code><b>/artists/{id}</b></code> <code>find an artist by ID</code></summary>
</details>

#### Parameters and body

> | Parameters  | Body |
> | ----------- | ---- |
> | `artist_id` | none |

#### Responses

> | code  | description          |
> | ----- | -------------------- |
> | `200` | successful operation |
> | `404` | aritst not found     |

<details>

<summary><code>PUT</code> <code><b>/artists/{id}</b></code> <code>replaces an artist with an updated record</code></summary>

#### Parameters and body

> | Parameters  | Body                        |
> | ----------- | --------------------------- |
> | `artist_id` | name[string], genre[string] |

#### Responses

> | code  | description          |
> | ----- | -------------------- |
> | `200` | successful operation |
> | `404` | aritst not found     |

</details>

<details>
<summary><code>PATCH</code> <code><b>/artists/{id}</b></code> <code>updates an artist's record</code></summary>

#### Parameters and body

> | Parameters  | Body                        |
> | ----------- | --------------------------- |
> | `artist_id` | name[string], genre[string] |

#### Responses

> | code  | description          |
> | ----- | -------------------- |
> | `200` | successful operation |
> | `404` | aritst not found     |

</details>

<details>
<summary><code>DELETE</code> <code><b>/artists/{id}</b></code> <code>deletes an artist</code></summary>

#### Parameters and body

> | Parameters  | Body |
> | ----------- | ---- |
> | `artist_id` | None |

#### Responses

> | code  | description          |
> | ----- | -------------------- |
> | `200` | successful operation |
> | `404` | aritst not found     |

</details>

### Albums

<details>
<summary><code>POST</code> <code><b>/artists/{id}/albums</b></code> <code>add a new album associated with an artist</code></summary>

#### Parameters and body

> | Parameters  | Body                          |
> | ----------- | ----------------------------- |
> | `artist_id` | name [string], year [integer] |

#### Responses

> | code  | description          |
> | ----- | -------------------- |
> | `201` | successful operation |

</details>

<details>
<summary><code>GET</code> <code><b>/albums</b></code> <code>find all albums</code></summary>

#### Parameters and body content

> None

#### Responses

> | code  | description          |
> | ----- | -------------------- |
> | `200` | successful operation |

</details>

<details>
<summary><code>GET</code> <code><b>/albums/{id}</b></code> <code>find an album by ID</code></summary>

#### Parameters and body

> | Parameters | Body |
> | ---------- | ---- |
> | `id`       | None |

#### Responses

> | code  | description          |
> | ----- | -------------------- |
> | `200` | successful operation |
> | `404` | album not found      |

</details>

<details>
<summary><code>PUT</code> <code><b>/albums/{id}</b></code> <code>replaces an album with an updated record</code></summary>

#### Parameters and body

> | Parameters | Body                        |
> | ---------- | --------------------------- |
> | `id`       | name[string], year[integer] |

#### Responses

> | code  | description          |
> | ----- | -------------------- |
> | `200` | successful operation |
> | `404` | album not found      |

</details>

<details>
<summary><code>PATCH</code> <code><b>/albums/{id}</b></code> <code>updates an album's record</code></summary>

#### Parameters and body

> | Parameters | Body                        |
> | ---------- | --------------------------- |
> | `id`       | name[string], year[integer] |

#### Responses

> | code  | description          |
> | ----- | -------------------- |
> | `200` | successful operation |
> | `404` | album not found      |

</details>

<details>
<summary><code>DELETE</code> <code><b>/albums/{id}</b></code> <code>deletes an album</code></summary>

#### Parameters and body

> | Parameters | Body |
> | ---------- | ---- |
> | `id`       | None |

#### Responses

> | code  | description          |
> | ----- | -------------------- |
> | `200` | successful operation |
> | `404` | album not found      |

</details>

## Credits

👤 **David Ding**

- GitHub [@david-tech-ding](https://github.com/david-tech-ding)
- LinkedIn [@tech-ding](https://www.linkedin.com/in/txding/)
