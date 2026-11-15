# VeriRail AI

**Track: AI + Finance | Project route: Our own idea**

This project is a prototype and is not financial advice.

VeriRail connects payment-risk simulation with evidence-aware financial-dispute preparation. The six tools are Dispute Recovery, Payment Triage, Safe Rails, Neural Lab, Audit, and QR & System. A scoped assistant explains the project and can highlight a relevant control without performing an action.

## Run the application

Python 3.10+ is sufficient for this server. From the repository folder:

```sh
python server.py
```

Open **http://127.0.0.1:8080**, choose **Continue as Guest**, and wait for **AI Ready**. On Windows, Start-VeriRail.cmd is also included. The browser downloads runtime/model assets, so internet access is needed for the recovery text encoder and external scripts. Core scoring and local guidance do not need an OpenAI key. See [AI_SETUP.md](AI_SETUP.md) for optional open-ended Project AI.

## Judge walkthrough

1. Use a supplied synthetic dispute example. Show the privacy preview, estimate, and uncertainty note.
2. Review an evidence signal and open the draft letter. The user can copy/download, edit externally, and send it through an official channel.
3. Open Payment Triage and change a scenario input. Clear, Step-Up, and Block are simulations.
4. Compare historical provider context in Safe Rails and inspect model sensitivity in Neural Lab.
5. Open Audit and review baselines, subgroup diagnostics, and selected model failures.
6. Ask a local guidance question and use its visual pointer. Hosted project answers require the optional backend configuration.

The app does not connect to bank accounts, freeze/release funds, execute payments, submit disputes, or guarantee refunds. Snapshots and prototype accounts use browser storage.

## Methods and reported results

The saved notebook reports 9,659 filtered CFPB complaints for recovery and a 120,000-row IEEE-CIS payment configuration. It uses chronological 65/15/20 training/calibration/test splits. A frozen BGE text encoder feeds a FiLM recovery classifier; a separate neural head scores payment features. Training includes proxy adversaries and a distance-dependence penalty, followed by calibration.

| Reported measure | Baseline | Full model |
| --- | --- | --- |
| Recovery average precision | 0.3198, TF-IDF/XGBoost | 0.3504 |
| Recovery precision / recall | 0.301 / 0.469 | 0.319 / 0.634 |
| Payment average precision | 0.2233, XGBoost | 0.2929 |
| Non-local false-block rate | 3.04%, XGBoost | 7.00% |

These are single-run saved retrospective results, not an independent rerun or live-bank performance. The recovery full model has Brier score 0.0982, worse than the trailing-rate baseline's 0.0781. Subgroup coverage is 88.6% and 92.4%, not a universal 90% guarantee. Payment precision/recall were not exported. The full report describes temporal-label-availability limitations, simplified browser features, conversion-parity gaps, and the selected failure cases.

## Submission documents and reproducibility

- [One-page write-up](docs/Submission-Write-Up.pdf)
- [Anonymous technical report](docs/Technical-Report.pdf)
- [Training notebook with saved outputs](train/VeriRail_AI_Training.ipynb)
- [Complete sources and AI credits](CREDITS.md)
- [Saved evaluation](artifacts/audit_results.json)

The training notebook uses public datasets, needs authorized dataset access, and does not pin every package or dataset revision. The application uses supplied browser weights and metadata. Raw datasets and private credentials are not included. Read the full report before interpreting the benchmark or legal/timing templates.

## Credits and AI assistance

The project uses the CFPB dataset through Bob-68's Hugging Face mirror; IEEE-CIS transaction data; BAAI BGE and the Xenova browser conversion; PyTorch, Sentence Transformers, scikit-learn, XGBoost, Transformers.js, and the established methods linked in CREDITS.md. ChatGPT/Codex supported documented UI, assistant, debugging, performance, media, and writing work. The team is responsible for understanding and explaining the submission. No affiliation with a bank or automatic recovery service is claimed.

## This repository update

This kit uses the optimized frontend. The server allows the new public app-config.js file, and the configuration connects local full-app use to the same-origin server. On a Static Space, use a separately configured optional backend. Model, training, and audit artifacts are preserved. A safe .env.example and .gitignore are included; never upload a populated .env.
