import freeGoogleImages from 'free-google-images';

export default async function handler(req, res) {
  const query = req.query.q || 'cats'; // default search term
  const limit = parseInt(req.query.limit) || 5;

  try {
    const images = await freeGoogleImages(query, { limit });
    res.status(200).json({ success: true, images });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
