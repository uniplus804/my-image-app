module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const gis = require("async-g-i-s");
  const query = req.query.q || 'cats';
  const limit = parseInt(req.query.limit) || 10;

  try {
    const results = await gis(query);
    const images = results.slice(0, limit);
    res.status(200).json({ success: true, images });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
