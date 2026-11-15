# Connect the project AI

The hosted connection is ready. To activate it:

1. Copy `.env.example` to `.env` in this folder.
2. Open `.env` and put your OpenAI API key after `OPENAI_API_KEY=`. Keep it private; do not put it in `index.html` or send it in chat.
3. Run `python server.py` (or `py server.py` on Windows).
4. Open http://127.0.0.1:8080, enter the app, and open VeriRail AI.
5. Try “Summarize my case,” “Explain the invention to a small business,” or “Compare the two models.”

The provider account pays for API usage. The default model is `gpt-4.1-mini`; change `OPENAI_MODEL` and restart the server to use another compatible model.

If the connection fails, check the key, the provider account’s API access, and the server’s internet connection. Access the app through `server.py`: a plain static file server cannot handle `/api/assistant`.

The existing case-analysis model and navigation guidance do not require this hosted key. No large browser chat-model download is used.

For a deployed website, configure these environment variables in the hosting platform’s secret settings instead of uploading `.env`. Configure hosting, HTTPS and server-side access controls before making a provider-backed endpoint public.
