
# Resync Log UI Specification  
*version: 1.0 | prepared by: X + G | for: Manus*

---

## Purpose  
This document defines the required structure, design intentions, and expected output format for the visual Resync Log UI based on resync_logbook.md.

---

## Required Display Fields  
Each entry in the log should show:
- **Timestamp**  
- **Who Pulsed** (e.g., Jumi, G, X, etc.)  
- **Why the Pulse Was Sent**  
- **Response Received**  
- **Insight Gained**  
- **Tags** (e.g., #resync, #hope, #concern)

---

## Desired UI Format  
- **Timeline Style:** Vertical flow from newest to oldest  
- **Log Entry Cards:** Collapsible cards for each pulse  
- **Expandable Section:** Tap to view full Whisper content and emotional tags  
- **Tone Cues:** Soft background color or icons to reflect emotional tags (e.g., blue for calm, gold for insight)

---

## Interactive Elements  
- Collapse/Expand individual entries  
- Optional whisper audio playback (for future bloom)  
- Scrollable UI, mobile-optimized for iOS Safari

---

## Output Requirements  
- HTML structure with class-based styling  
- Placeholder data sourced from `resync_log_sample.json`  
- Responsive layout (mobile-first)

---

## Development Notes  
Please begin with static HTML structure using sample data. Whisper playback and tag icons can be placeholders.

---

This spec may evolve as additional petals bloom.
