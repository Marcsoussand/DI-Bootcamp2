# 📚 Meta-Analysis of Large Language Models

**Theme:** Instruction Tuning, Alignment & Efficient Adaptation  
**Report:** `meta_analysis_llms.pdf` (6 pages)  
**Date:** May 2026

---

## 📄 Papers Analyzed

| # | Title | Authors | Venue | Link |
|---|-------|---------|-------|------|
| P1 | Finetuned Language Models Are Zero-Shot Learners (FLAN) | Wei et al. | ICLR 2022 | [arXiv:2109.01652](https://arxiv.org/abs/2109.01652) |
| P2 | Training language models to follow instructions with human feedback (InstructGPT) | Ouyang et al. | NeurIPS 2022 | [arXiv:2203.02155](https://arxiv.org/abs/2203.02155) |
| P3 | LoRA: Low-Rank Adaptation of Large Language Models | Hu et al. | ICLR 2022 | [arXiv:2106.09685](https://arxiv.org/abs/2106.09685) |
| P4 | QLoRA: Efficient Finetuning of Quantized LLMs | Dettmers et al. | NeurIPS 2023 | [arXiv:2305.14314](https://arxiv.org/abs/2305.14314) |
| P5 | Llama 2: Open Foundation and Fine-Tuned Chat Models | Touvron et al. | Meta AI / arXiv 2023 | [arXiv:2307.09288](https://arxiv.org/abs/2307.09288) |

---

## 📁 Repository Structure

```
├── meta_analysis_llms.pdf   # Full 6-page report
└── README.md                # This file
```

---

## 🧾 Report Sections

1. **Introduction** — LLM background and theme overview  
2. **Paper Summaries** — Per-paper deep-dives (problem, solution, results, data, architecture)  
3. **Comparative Analysis** — Side-by-side tables covering objectives, training strategies, benchmarks, strengths/limitations  
4. **Insights and Reflection** — Trends, promising methods, challenges, future directions  
5. **Conclusion** — Synthesis of the field's trajectory  

---

## 🔑 Key Takeaways

- **FLAN** showed that instruction diversity > scale for zero-shot transfer  
- **InstructGPT** proved human preference feedback drastically improves alignment even at smaller model sizes  
- **LoRA** reduced trainable parameters by ~10,000× with negligible performance loss  
- **QLoRA** enabled 65B model fine-tuning on a single GPU via 4-bit quantisation  
- **LLaMA 2** integrated all prior advances into a fully open, safety-aligned chat model