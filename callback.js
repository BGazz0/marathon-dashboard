import { google } from 'googleapis';

export default async function handler(req, res) {
  const { code } = req.query;
  
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.REDIRECT_URI
  );

  try {
    const { tokens } = await oauth2Client.getToken(code);
    // For now, we return the tokens to the UI to prove it works. 
    // In production, you'd save these to a database.
    res.status(200).json(tokens);
  } catch (error) {
    res.status(500).json({ error: 'Failed to exchange code', details: error.message });
  }
}
