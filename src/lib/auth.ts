import jwt from 'jsonwebtoken';
import type { RESTPostOAuth2AccessTokenResult } from 'discord-api-types/v10';
import type { NextApiRequest } from 'next';
import { parseCookies } from 'nookies';

import { ApiError } from '@structures/ApiError';

export function getAuthInfos(req: NextApiRequest) {
  if (req.headers.authorization) {
    const [scheme, token] = req.headers.authorization.split(' ');
    if (!/^Bearer$/i.test(scheme)) {
      throw new ApiError({
        status: 401,
        error: 'invalid_token_type',
        errorDescription: 'The token format provided is invalid.',
      });
    }

    try {
      const authInfos = jwt.verify(token, process.env.JWT_SECRET) as RESTPostOAuth2AccessTokenResult;
      return authInfos;
    } catch(err) {
      console.error(err);
      throw new ApiError({
        status: 401,
        error: 'invalid_token',
        errorDescription: 'Invalid token provided.',
      });
    }
  }

  const { token } = parseCookies({ req });
  if (!token) {
    throw new ApiError({
      status: 401,
      error: 'no_token_provided',
      errorDescription: 'No token was provided.',
    });
  }

  try {
    const authInfos = jwt.verify(token, process.env.JWT_SECRET) as RESTPostOAuth2AccessTokenResult;
    return authInfos;
  } catch(err) {
    console.error(err);
    throw new ApiError({
      status: 401,
      error: 'invalid_token',
      errorDescription: 'Invalid token provided.',
    });
  }
}