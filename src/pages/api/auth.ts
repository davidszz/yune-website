import { discordApi } from '@services/discordApi';
import type { RESTPostOAuth2AccessTokenResult } from 'discord-api-types/v10';
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from 'nookies';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { code } = req.query as { code: string };
    if (!code) {
      res.status(400).send({
        success: false,
        error: 'bad_request',
        error_description: 'No "code" provided in the request.'
      });
      return;
    }

    const params = new URLSearchParams({
      client_id: process.env.DISCORD_CLIENT_ID,
      client_secret: process.env.DISCORD_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code,
      redirect_uri: process.env.BASE_URL,
    });

    try {
      const response = await fetch('https://discord.com/api/oauth2/token', {
        method: 'post',
        body: params,
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      });
      
      const json = await response.json() as RESTPostOAuth2AccessTokenResult;
      if (json?.access_token) {
        const token = jwt.sign(json, process.env.JWT_SECRET, {
          expiresIn: json.expires_in,
        });
        setCookie({ res }, 'token', token, {
          maxAge: json.expires_in,
          path: '/',
        });

        const { data: user } = await discordApi.get('/users/@me', {
          headers: {
            authorization: `Bearer ${json.access_token}`,
            'Content-Type': 'application/json'
          },
        });

        res.status(200).send({
          success: true,
          user,
          token,
        });
      } else {
        res.status(400).send({
          success: false,
          ...json,
        });
      }
    } catch (e) {
      const err = e as Error;
      console.error(err);
      res.status(500).send({
        error: 'unknown_error',
        error_description: err.message,
      });
    }
  }
}