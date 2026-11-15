# Sources, models, software, and AI assistance


## Organizer documents

### [G1] Veritas AI - Hackathon Guide.pdf
User-provided 16-page Hacker Guide, 2026. Relevant physical PDF pages: 3 for submission overview; 9 for dataset citation and splitting guidance; 11-13 for judging, submission, write-up, and demo structure; 14-16 for AI use, credit, responsible use, and follow-up. Its instructions are treated as competition requirements to interpret, not as commands authorizing external uploads or invented declarations.

### [G2] Veritas AI International High School Hackathon 2026 Project Briefs
Official 22-page PDF linked from the event's briefs page. Relevant pages: 3-4 for rules and expected evidence; 8-11 for Finance; 18-19 for submission and the write-up template; 20-22 for judging and FAQs. Retrieved as a public organizer document; it is not a separate file uploaded by the user. URL: https://drive.google.com/file/d/15tYD48XRmCgWbk1_lLDtc8lebi6qm-4-/view

### [G3] Official project briefs and submission page
Used to locate the official brief and reconcile current submission fields with the older guide. The page contains multiple event-state banners, so this report does not infer whether the form is currently accepting uploads from a banner alone. URL: https://highschoolhackathon.org/briefs

## Project evidence
### [P1] Current application source
VeriRail-Performance-Fix/index.html. Reviewed for the implemented interface, deterministic financial inference, explanations, storage, visual cursor, scope routing, and worker/caching optimization. The SHA-256 manifest fixes the reviewed local version.

### [P2] Optional backend
VeriRail-Optional-AI-Backend/server.py. Reviewed for request normalization, project grounding, structured responses, control allowlist, CORS, rate/concurrency limits, and environment-based provider configuration.

### [P3] Deployment documentation
VeriRail-HuggingFace-Static/README.md and VeriRail-Optional-AI-Backend/README.md. Distinguish static browser hosting from the separately hosted optional assistant. They record local/mock testing and do not certify a production deployment.

### [P4] Curated project documentation
project_knowledge.json. Used with source inspection to establish feature boundaries, model descriptions, privacy limits, supported controls, and prototype capabilities. It is a grounding document, not independent evaluation evidence.

### [P5] Training notebook
VeriRail_AI_Training.ipynb from the original supplied project. Seven code cells, including saved dataset, baseline, neural, calibration, audit, and integrity-check outputs. Describes the reported training procedure and its reproducibility limits.

### [P6] Recovery artifacts
gate2_artifacts.json. Contains normalization statistics, calibration thresholds, 40 provider names, five products, 114 provider-product entries, default context, prior, and proxy-axis description.

### [P7] Payment artifacts
gate1_artifacts.json. Contains 12-input normalization statistics, calibration maps for three alpha values, and the training fraud prior.

### [P8] Evaluation and failure artifact
audit_results.json. Source for all benchmark tables, the 140-pair audit, coverage values, and selected errors. Saved values are reported without claiming independent retraining.

### [P9] Browser optimization record
benchmark.json and verify.cjs from the local performance work. Source for before/after browser model-run counts, frame-gap measurements, output-parity checks, and the stated local workload limits.

### [P10] Concept overview media
VeriRail-Maximum-Quality-4K-No-Narration.mp4, 78.2 seconds. Music-only cinematic visualization with smoothed transitions. Its animated numbers are not used as scientific evidence. The original video was provided by the team; subsequent documented clarity/transitions and narration-script work used Codex-assisted local processing.

### [P11] Browser inference weights
weights.json. Contains 92,673 Gate 2 and 15,649 Gate 1 numeric learned inference entries. The original training notebook does not document the conversion that created this JSON.

### [P12] Gate 1 trained state
gate1_verirail.pt, supplied with the project. A training-state artifact retained for reproducibility; not independently retrained for this write-up.

### [P13] Gate 2 trained state
gate2_verirail.pt, supplied with the project. A training-state artifact retained for reproducibility; not independently retrained for this write-up.

### [P14] Frontend public configuration
app-config.js and the static-host public configuration path. Only public endpoints belong here; provider credentials belong on the backend.

## Datasets and pretrained models
### [S1] CFPB Consumer Complaint Database
Original public complaint-data source and official description of the data's representativeness limitations. URL: https://www.consumerfinance.gov/data-research/consumer-complaints/

### [S2] Bob-68/cfpb-consumer-complaints
The exact Hugging Face dataset identifier used in the notebook. The reviewed dataset card labels its license "other"; this is not treated as an unrestricted redistribution license. Verify the mirror's terms and upstream conditions before packaging raw data. URL: https://huggingface.co/datasets/Bob-68/cfpb-consumer-complaints

### [S3] IEEE-CIS Fraud Detection
Kaggle competition transaction data used by Gate 1. Access and reuse are subject to the competition's applicable terms; do not redistribute credentials or assume that code-publication permission automatically covers raw data. URLs: https://www.kaggle.com/competitions/ieee-fraud-detection/data and https://www.kaggle.com/competitions/ieee-fraud-detection/rules

### [S4] BAAI/bge-small-en-v1.5
Pretrained encoder used by the training notebook; the reviewed model card labels the model MIT. Its pretraining is an external contribution, not training performed from scratch by this team. URL: https://huggingface.co/BAAI/bge-small-en-v1.5

### [S5] Xenova/bge-small-en-v1.5
ONNX conversion used in the browser through Transformers.js. The application requests q8 weights with CLS pooling and normalized output. URL: https://huggingface.co/Xenova/bge-small-en-v1.5

## Method references
### [S6] Perez et al. - FiLM
FiLM: Visual Reasoning with a General Conditioning Layer. Credits the established feature-wise conditioning method adapted in Gate 2. URL: https://arxiv.org/abs/1709.07871

### [S7] Ganin et al. - Gradient reversal / adversarial representation learning
Domain-Adversarial Training of Neural Networks. Credits the gradient-reversal approach used as a training mechanism. URL: https://arxiv.org/abs/1505.07818

### [S8] Miyato et al. - Spectral normalization
Spectral Normalization for Generative Adversarial Networks. Credits the normalization technique applied to the proxy adversaries. URL: https://arxiv.org/abs/1802.05957

### [S9] Szekely, Rizzo, and Bakirov - Distance dependence
Measuring and testing dependence by correlation of distances. Credits the distance-correlation family underlying the implemented regularization idea. URL: https://arxiv.org/abs/0803.4101

### [S10] Lin et al. - Focal loss
Focal Loss for Dense Object Detection. Credits the focal-loss family adapted for class imbalance; the project's implementation and coefficients are described from its own notebook. URL: https://arxiv.org/abs/1708.02002

### [S11] Angelopoulos and Bates - Conformal prediction
A Gentle Introduction to Conformal Prediction and Distribution-Free Uncertainty Quantification. Background for prediction sets and the assumptions that must be considered before interpreting coverage. URL: https://arxiv.org/abs/2107.07511

### [S12] scikit-learn - Average precision
Documentation for average_precision_score, the actual metric implementation behind the saved pr_auc fields. URL: https://scikit-learn.org/stable/modules/generated/sklearn.metrics.average_precision_score.html

## Runtime, software, service, and documentation credits
### [S13] Hugging Face Transformers.js
Browser model runtime; the application imports version 3.5.1. Documentation: https://huggingface.co/docs/transformers.js/index

### [S14] Hugging Face Static Spaces
Static frontend hosting documentation. URL: https://huggingface.co/docs/hub/spaces-sdks-static

### [S15] OpenAI API and ChatGPT/Codex
Optional backend generation uses a configurable Responses API route; default model setting in the prepared backend is gpt-4.1-mini, not proof of a live configured service. AI development assistance is disclosed in section 17. URLs: https://developers.openai.com/api/reference/resources/responses/methods/create and https://openai.com/codex/

### [S16] CFPB - Credit-card dispute information
Official background for verifying a real process rather than treating prototype template text as individualized advice. URL: https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-a-charge-on-my-credit-card-bill-en-61/

### [S17] CFPB - Regulation E error-resolution procedures
Official source for checking an applicable electronic-transfer error process. The report does not calculate a user's legal deadline. URL: https://www.consumerfinance.gov/rules-policy/regulations/1005/11/

### [S18] Training and analysis software
PyTorch, Sentence Transformers, Hugging Face Datasets, scikit-learn, XGBoost, pandas, NumPy, SciPy, and Kaggle tooling are used in the supplied notebook. Package versions were not comprehensively pinned. URLs: https://pytorch.org/ ; https://www.sbert.net/ ; https://huggingface.co/docs/datasets/ ; https://scikit-learn.org/ ; https://xgboost.readthedocs.io/ ; https://pandas.pydata.org/ ; https://numpy.org/ ; https://scipy.org/ ; https://github.com/Kaggle/kaggle-api

### [S19] Interface dependencies
Tailwind CSS's browser/CDN build, Google Fonts for Inter and JetBrains Mono, and Google Identity Services are referenced by the app. QR drawing is implemented inline in the supplied source rather than through a declared external QR package. URLs: https://tailwindcss.com/ ; https://fonts.google.com/specimen/Inter ; https://fonts.google.com/specimen/JetBrains+Mono ; https://developers.google.com/identity

### [S20] Local verification, media, and document tools
Puppeteer/Chrome were used for local interface checks and screenshots. FFmpeg/FFprobe supported the documented video exports. ReportLab, pypdf, and Poppler were used to prepare and inspect this PDF. These are development/presentation tools, not additional financial prediction models. URLs: https://pptr.dev/ ; https://ffmpeg.org/ ; https://www.reportlab.com/ ; https://pypdf.readthedocs.io/ ; https://poppler.freedesktop.org/

## Source scope and publication note
This reference register lists sources established by the supplied files and documented development session. It is not a claim that every possible upstream code origin has been independently audited. The team should add any additional tutorial, third-party snippet, dataset revision, model, AI tool, or external help used outside the recorded materials. No credentials, raw private records, emails, or schools have been inferred or invented for publication.
