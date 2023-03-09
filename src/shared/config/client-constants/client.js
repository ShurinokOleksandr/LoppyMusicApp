export const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
export const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET;
export const REDIRECT= process.env.NEXT_PUBLIC_REDIRECT
export const AUTH_ENDPOINT = process.env.NEXT_PUBLIC_AUTH_ENDPOINT
export const SCOPES = [
    "ugc-image-upload",
    "user-read-private",
    "user-read-email",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-library-modify",
    "user-library-read",
    "user-modify-playback-state",
    "user-follow-modify",
    "user-follow-read",
    "user-top-read",
    "playlist-read-private",
    "playlist-modify-private",
]