import mongoose, { model, Schema, Model } from 'mongoose';

interface IMatchSchema {
  _id: string;
  status: number;
  matchId: number;
  guildId: {
    _id: string;
    icon?: string;
    name?: string;
  };
  participants: {
    userId: string;
    teamId: number;
    username?: string;
    discriminator?: string;
    avatar?: string;
  }[];
};

const ParticipantSchema = new Schema<{ member: string; }>({
  member: {
    type: String,
    ref: 'Member',
  },
}, { _id: false });

const MatchSchema = new Schema<IMatchSchema>({
  status: Number,
  matchId: Number,
  guildId: {
    type: String,
    ref: 'Guild',
  },
  participants: [ParticipantSchema]
});

export const MatchModel = mongoose.models.Match as Model<IMatchSchema> || model<IMatchSchema>('Match', MatchSchema);