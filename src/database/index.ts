import mongoose, { Mongoose } from 'mongoose';

import '@database/models/GuildModel';
import '@database/models/MatchModel';
import '@database/models/MemberModel';

const cached: { connection?: Mongoose } = {};

export async function connect() {
  if (cached.connection) {
    return cached.connection;
  }

  cached.connection = await mongoose.connect(process.env.MONGODB_URI!);
  return cached.connection;
}
