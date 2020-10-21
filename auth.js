function authorize() {
    const clientId = "c1e158e094a144d0b07143e38e0128cf";
    const scopes = "ugc-image-upload user-read-recently-played user-read-playback-position user-top-read playlist-modify-private playlist-read-collaborative playlist-read-private playlist-modify-public streaming app-remote-control user-read-email user-read-private user-follow-read user-follow-modify user-library-modify user-library-read user-read-currently-playing user-read-playback-state user-modify-playback-state";
    const redirectUri = "http://localhost:8000/oauth.html"
    const spotifyUrl = "https://accounts.spotify.com";
    const authUrl = `${spotifyUrl}/authorize?response_type=code&client_id=${clientId}&scope=${scopes}&redirect_uri=${redirectUri}`

    window.location = authUrl;
}