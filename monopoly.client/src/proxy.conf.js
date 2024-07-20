const PROXY_CONFIG = [
  {
    context: [
      "/api/auth/*",
      "/api/gameLobby/*",
    ],
    target: "https://localhost:7059",
    secure: false
  }
]

module.exports = PROXY_CONFIG;