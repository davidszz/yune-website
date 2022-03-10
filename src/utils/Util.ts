export class Util {
  static makeAssetUrl(asset: string, appId?: string, format: 'png' | 'jpg' | 'jpeg' | 'webp' | 'gif' = 'png', size: 64 | 128 | 256 | 512 | 1024 = 128) {
    if (/^spotify:/.test(asset)) {
      return `https://i.scdn.co/image/${asset.slice(8)}`;
    } else if (/^twitch:/.test(asset)) {
      return `https://static-cdn.jtvnw.net/previews-ttv/live_user_${asset.slice(7)}.png`;
    } else if (asset.startsWith('mp:external')) {
      return asset.replace(/mp:external\/([^\/]*)\/(http[s])/g, '$2:/');
    }

    return `https://cdn.discordapp.com/app-assets/${appId}/${asset}.${format}?size=${size}`;
  }
}