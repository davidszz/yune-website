import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';
import { parseCookies } from 'nookies';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = parseCookies({ req });
  if (token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).send({
      response: decoded,
    });
  }
  
  const params = new URLSearchParams({
    client_id: process.env.DISCORD_CLIENT_ID,
    redirect_uri: `${process.env.BASE_URL}`,
    response_type: 'code',
    scope: 'identify email guilds guilds.join',
  });

  res.redirect(`https://discord.com/api/oauth2/authorize?${params}`);
}