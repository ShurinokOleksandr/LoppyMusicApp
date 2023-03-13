import {getSession} from "next-auth/react";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const spotifyApi = createApi({
    reducerPath: 'spotifyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.spotify.com/v1',
        prepareHeaders: async (headers) => {
            const session = await getSession();
            if (session) {
                headers.set('Authorization', `Bearer ${session.accessToken}`);
            }
            return headers;
        },
    }),
    endpoints: build => ({
        userProfile: build.query({
            query: () => `/me`
        }),
        userSaved: build.query({
            query: () => `/me/tracks`
        }),
        userPlaylists: build.query({
            query:(user_id) => `/users/${user_id}/playlists`
        }),
        recentlyPlayed: build.query({
            query: (limit=6) => `/me/player/recently-played?limit=${limit}`
        }),
        currentPlaying: build.query({
            query: () => `/me/player/currently-playing`
        }),
    }),
});

export const {
    useUserProfileQuery,
    useRecentlyPlayedQuery,
    useUserSavedQuery,
    useUserPlaylistsQuery,
    useCurrentPlayingQuery,
} = spotifyApi;
