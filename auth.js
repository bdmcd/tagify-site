function authorize() {
    const clientId = "c1e158e094a144d0b07143e38e0128cf";
    const scopes = "user-library-read";
    const redirectUri = "http://localhost:8000/oauth.html"
    const spotifyUrl = "https://accounts.spotify.com";
    const authUrl = `${spotifyUrl}/authorize?response_type=code&client_id=${clientId}&scope=${scopes}&redirect_uri=${redirectUri}`

    window.location = authUrl;
}