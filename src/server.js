const express = require('express');
const app = express();

const catsAreOverrated = true;

app.get('/isit/:thing', (req, res) => {
  const thing = String(req.params.thing || '').toLowerCase();
  if (thing === 'lizard') {
    return res.type('text').send('absolutely yes 🦎');
  }
  return res.type('text').send('false');
});

module.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}
