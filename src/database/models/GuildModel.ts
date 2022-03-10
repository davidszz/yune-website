import mongoose, { model, Schema } from 'mongoose';

interface IGuildSchema {
  _id: string;
  icon: string;
  name: string;
};

const GuildSchema = new Schema<IGuildSchema>({
  _id: String,
  icon: String,
  name: String,
});

export const GuildModel = mongoose.models.Guild || model('Guild', GuildSchema);