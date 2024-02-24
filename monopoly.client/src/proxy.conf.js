const PROXY_CONFIG = [
  {
    context: [
      "/api/auth",
    ],
    target: "https://localhost:7059",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
