export default function handler(req, res) {
  const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

  const redirect_uri = `${req.headers.origin}/api/auth/callback`;

  const authUrl =
    `https://accounts.google.com/o/oauth2/v2/auth` +
    `?client_id=${CLIENT_ID}` +
    `&redirect_uri=${redirect_uri}` +
    `&response_type=code` +
    `&scope=https://www.googleapis.com/auth/calendar` +
    `&access_type=offline` +
    `&prompt=consent`;

  res.redirect(authUrl);
}