import type { NextApiRequest, NextApiResponse } from "next";

import { DiscordApi } from "@services/discord-api";

const team = [
  '757379507358531675', 
  '787475567259287554',
  '933997974059614258'
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const users = await Promise.all(team.map(userId => DiscordApi.getUser(userId)));
    res.status(200).send({
      users,
    });
  }
}