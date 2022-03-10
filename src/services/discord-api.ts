import { REST } from '@discordjs/rest';
import { Routes, Snowflake, APIUser } from 'discord-api-types/v10';

const rest = new REST({ version: '10' })
  .setToken(process.env.DISCORD_TOKEN);

export class DiscordApi {
  static async getUser(userId: Snowflake | '@me' = '@me'): Promise<APIUser> {
    const response = await this.rest.get(Routes.user(userId));
    return response as APIUser;
  }

  static get rest() {
    return rest;
  }
}