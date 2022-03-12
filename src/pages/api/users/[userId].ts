import type { NextApiRequest, NextApiResponse } from "next";

import { getAuthInfos } from "@lib/auth";
import { discordApi } from "@services/discordApi";
import { ApiError } from "@structures/ApiError";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { userId = '@me' } = req.query as { userId?: string };
    if (userId !== '@me') {
      res.status(401).send({
        error: 'invalid_request',
        error_description: 'Invalid user provided.'
      });
      return;
    }

    try {
      const authInfos = getAuthInfos(req);
      const { data } = await discordApi.get('/users/@me', {
        headers: {
          authorization: `Bearer ${authInfos.access_token}`,
          'Content-Type': 'application/json'
        },
      });

      res.status(200).send(data);
    } catch(e) {
      if (e instanceof ApiError) {
        res.status(e.status).send({
          error: e.error,
          error_description: e.errorDescription,
        });
      } else {
        const err = e as Error;
        res.status(500).send({
          error: 'unknown_error',
          error_description: err.message,
        });
      }
    }
  }
}