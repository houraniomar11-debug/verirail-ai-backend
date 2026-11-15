# VeriRail — refined UI and project assistant

The approved layout is preserved. This update adds a stronger glass finish, clearer AI targeting, a simpler **Next steps** panel, and a prepared hosted-AI connection for open-ended project conversations.

## Run

From this folder, run `python server.py` (or `py server.py` on Windows), then open http://127.0.0.1:8080. `Start-VeriRail.cmd` is also included. Keep `index.html` beside `artifacts`.

The existing financial models and app guidance work without a hosted API key. Internet access is still needed for the original Tailwind runtime, fonts, Google integration, and recovery text model. Google sign-in still requires the original Google client-ID configuration.

## Activate hosted project AI

**The connection is implemented, but no API key is configured.** Follow [AI_SETUP.md](AI_SETUP.md): copy `.env.example` to `.env`, set `OPENAI_API_KEY`, then run `server.py`. The key stays on the server; never put it in `index.html` or share `.env`.

The backend uses OpenAI’s [Responses API](https://developers.openai.com/api/reference/resources/responses/methods/create) with [structured outputs](https://developers.openai.com/api/docs/guides/structured-outputs?api-mode=responses). The default model is `gpt-4.1-mini`, configurable with `OPENAI_MODEL`. Usage is billed to the configured provider account. No credentials are included, and no real hosted-model request was made during this update.

The assistant can discuss any aspect of this project: explanations, summaries, comparisons, examples, drafts, model behavior, limitations, implementation, or ideas. It is not restricted to where/when/why templates. The server supplies project documentation, known controls, and relevant masked workspace context. Unknown project details should be identified as unknown instead of invented.

Common unrelated everyday questions are rejected before contacting the provider. The hosted model also checks scope. Out-of-scope replies are normalized to exactly:

> Out of context, could you be more clear?

Unrelated questions do not spawn a cursor. If Project AI is unavailable or not configured, ordinary app guidance remains available, and the interface reports the connection state honestly.

## Changes

- Stronger frosted glass, soft reflections, and translucent nested surfaces, with readable input backgrounds. The true black theme and approved layout remain.
- A more visible pointer, corner markers, and a label naming the highlighted control. “Go to highlighted control” focuses without activating it. Escape dismisses guidance.
- The ambiguous “3 · Your action plan” heading is now **Next steps**. The numbers indicate workflow steps, not years.
- Three direct actions: review the case and actual evidence; open a letter draft; save the result and keep references. Timing and the original framework/escalation suggestions remain in a collapsed section.
- A plain incident-day count replaces the blanket countdown badge. The original framework suggestions remain available for review.
- Hosted project chat, recent conversation context, a stop-answer control, and clear connection/error states.

## Data and deployment

Financial scoring still runs in-browser with the original model files. Accounts and snapshots still use the prototype’s browser storage. Hosted chat sends the question, recent conversation, and relevant workspace context to the configured AI provider through `server.py`. Known card, SSN, and email patterns are masked; this is not a complete privacy guarantee. Remove unnecessary personal details before chatting.

The server binds to localhost by default and does not expose keys or backend files as static assets. For public deployment, use platform secret storage, HTTPS, and appropriate server-side authentication. The original browser-account system is still a prototype; UI polish does not change that architecture.

## Validation

All six tools, seven supporting files, and 154 original element IDs remain. Supporting files were compared byte for byte with the original ZIP. Scoring, inference, simulation, comparison, and audit functions are unchanged.

Browser checks covered desktop/phone layouts, dark mode, glass styling, all tools, CSV scoring, letter controls, provider comparison, pointer alignment/focus, next-step draft/save actions, scope rejection, cancellation, and model-unavailable fallback. The original recovery model ran successfully.

Hosted-connection tests used a **simulated provider** to verify request/response handling, recent history, masked context, exact scope replies, valid targets, key isolation, missing-key behavior, malformed replies, origin checks, and request limits. A real hosted answer remains unverified until a key is configured. Experimental browser language models were rejected after inaccurate answers; they are not shipped or downloaded by this version.
