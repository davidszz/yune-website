import 'next';

import { RESTPostOAuth2AccessTokenResult } from 'discord-api-types/v10';

declare module 'next' {
  interface NextApiRequest {
    authInfos: RESTPostOAuth2AccessTokenResult | undefined;
  }
}
