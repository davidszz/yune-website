import mongoose, { model, Schema } from 'mongoose';

interface IMemberSchema {
  userId: string;
  teamId: number;
  username?: string;
  discriminator?: string;
  avatar?: string;
};

const MemberSchema = new Schema<IMemberSchema>({
  userId: String,
  teamId: Number,
  username: String,
  discriminator: String,
  avatar: String,
});

export const MemberModel = mongoose.models.Member || model('Member', MemberSchema);