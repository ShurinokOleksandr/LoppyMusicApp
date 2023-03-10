export const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
export const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET;
export const REDIRECT= process.env.NEXT_PUBLIC_REDIRECT
export const AUTH_ENDPOINT = process.env.NEXT_PUBLIC_AUTH_ENDPOINT
export const SCOPES = [
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'app-remote-control',
    'streaming',
    'playlist-read-private',
    'playlist-read-collaborative',
    'playlist-modify-private',
    'playlist-modify-public',
    'user-follow-modify',
    'user-follow-read',
    'user-read-playback-position',
    'user-top-read',
    'user-read-recently-played',
    'user-library-modify',
    'user-library-read',
    'user-read-email',
    'user-read-private',
]
