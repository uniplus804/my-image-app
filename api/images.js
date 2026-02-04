const gis = require("async-g-i-s");

module.exports = async function handler(req, res) {
  const q = req.query.q || "cats";
  const limit = parseInt(req.query.limit) || 10;

  try {
    // async-g-i-s returns all results, so we limit manually
    const results = await gis(q);
    const images = results.slice(0, limit);

    res.status(200).json({ success: true, images });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
