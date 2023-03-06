export const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
export const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET;
export const REDIRECT= process.env.NEXT_PUBLIC_REDIRECT
export const AUTH_ENDPOINT = process.env.NEXT_PUBLIC_AUTH_ENDPOINT
export const RESPONSE_TYPE = process.env.NEXT_PUBLIC_RESPONSE_TYPE
export const SCOPES = [
    "user-read-private",
    "user-read-email",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
]
