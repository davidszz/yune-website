export class Util {
  /**
   * @param duration - Duration in miliseconds
   */
  static spotifyDuration(duration: number) {
    let seconds = Math.floor(duration / 1000);
    
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;

    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    
    const result: string[] = [];
    if (hours > 0) result.push(String(hours.toString()));
    result.push(String(Math.max(minutes, 0)));
    result.push(String(Math.max(seconds, 0)).padStart(2, '0'));

    return result.join(':');
  }

  static makeAssetUrl(asset?: string, appId?: string, format: 'png' | 'jpg' | 'jpeg' | 'webp' | 'gif' = 'png', size: 64 | 128 | 256 | 512 | 1024 = 128) {
    if (!asset) {
      return;
    }
    
    if (/^spotify:/.test(asset)) {
      return `https://i.scdn.co/image/${asset.slice(8)}`;
    } else if (/^twitch:/.test(asset)) {
      return `https://static-cdn.jtvnw.net/previews-ttv/live_user_${asset.slice(7)}.png`;
    } else if (asset.startsWith('mp:external')) {
      return asset.replace(/mp:external\/([^\/]*)\/(http[s])/g, '$2:/');
    }

    return `https://cdn.discordapp.com/app-assets/${appId}/${asset}.${format}?size=${size}`;
  }

  static getUserAvatar({ id, avatar, discriminator }: { id: string; avatar: string | null; discriminator: string }) {
    if (avatar) {
      const format = avatar.startsWith('a_') ? 'gif' : 'png';
      return `https://cdn.discordapp.com/avatars/${id}/${avatar}.${format}?size=128&quality=lossless`;
    }
    
    const defaultAvatarNumber = parseInt(discriminator.slice(-1), 10) % 5;
    return `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`;
  }
}