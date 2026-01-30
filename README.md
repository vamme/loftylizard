# isit-service

Small node microservice answering whether something is a lizard.

**Behaviour**
- `GET /isit/:thing` — if `:thing` equals `lizard` (case-insensitive), the service responds with the text `absolutely yes 🦎`.
- For anything else the service responds with the text `false`.

**Install**

Run these commands in a shell:

```bash
# install dependencies
npm install
```

**Run**

Start the server on port 3000:

```bash
npm start
```

Developer mode (auto-restart):

```bash
npm run dev
```

**Examples**

Query for a lizard:

```bash
curl http://localhost:3000/isit/lizard
```

Expected body:

```
absolutely yes 🦎
```

Query for something else:

```bash
curl http://localhost:3000/isit/cat
```

Expected body:

```
false
```

**Linting**

Run ESLint across the project:

```bash
npm run lint
```

**Testing**

To run the tests, run:

```bash
npm test
```

We have a lot of tests, and they are a tad-bit slow. They take about 30 seconds to run.