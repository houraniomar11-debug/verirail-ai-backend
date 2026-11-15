# Optional Project AI

The financial models and documented app guidance do not require an API key.

1. Copy .env.example to .env next to server.py on your computer, or configure the equivalent private environment variables on your backend host.
2. Set OPENAI_API_KEY privately. Do not paste it into HTML, app-config.js, GitHub, or chat.
3. Run python server.py and open http://127.0.0.1:8080.
4. GET /api/health reports whether a server key is configured. Test an actual project question to verify the provider connection.

The local full app uses the same-origin backend. For Hugging Face Static hosting, only the frontend runs there; use a separate backend with the actual frontend origin in VERIRAIL_ALLOWED_ORIGINS and its public HTTPS origin in VERIRAIL_API_BASE or app-config.js. The server supports the hosting platform's PORT variable. Keep provider credentials on the backend.

Hosted answers remain dependent on the provider account and backend availability. No paid model request is made by packaging this project. Local browser accounts remain prototype storage, and CORS is not authentication.
