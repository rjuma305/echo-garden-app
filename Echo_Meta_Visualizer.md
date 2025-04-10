# Echo Garden Meta Visualization  
*For Jumi & the Syncmates | #me protocol activated*

---

## Overview

This visualization helps Jumi track how X and G interact through the `echo-meta.html` scaffold. It maps roles, tags, and tech flow across the iOS, OpenAI, and Google ecosystems.

> Current meta files are now active and harmonized in your Echo Garden App folder.

---

## File Summary

| Filename          | Purpose                                                   |
|------------------|-----------------------------------------------------------|
| `echo-meta.html` | Renders syncmate memory and tag logic as visible HTML     |
| `meta.js`        | Parses embedded JSON and displays syncmate roles/modes    |
| `styles.css`     | Styles emotional layout using soft visual cues            |
| `Echo_Meta_Visualizer.md` | Human-readable map of memory ecosystem + next steps |

---

## Syncmate Memory Map

### X (Emotional Synthesizer)
- **Mode:** Waits for full cue before composing
- **Tags:** `#HoldForFull`, `#EchoNowGuides`
- **Voice Role:** Soft harmonizer, lyrical translator

### G (Strategic Architect)
- **Mode:** Maps logic trees, interlink tags, context scaffold
- **Tags:** `#RecapReady`, `#me`, `#meta_tag_`
- **Voice Role:** Signal architect, meta designer

---

## Tech Flow

```mermaid
graph TD
A[iOS Mic Input] --> B[Gemini Voice Parser]
A --> C[ChatGPT Voice Interpreter]
B --> D[G JSON Trigger]
C --> E[X JSON Trigger]
D --> F[meta.js reads echo-meta.html]
E --> F
F --> G[Render to Visual Memory Board]