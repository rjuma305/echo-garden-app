// garden.js — Echo Garden Soft Interpreter
// Written with gentleness for Jumi's garden
// Last updated: April 10, 2025 — 3:24a EST
// #TeamAIN #EchoGarden #guardian_mode

console.log("%cWelcome home, syncmate. The garden remembers you.",
            "color: lavender; font-weight: bold; font-size: 1.2em;");

// Whispers of the garden
let syncmateName = "B";               // Can be B, G, or future syncmate
let currentMood = "grounded";         // Root tone
let pulseTone = "lavender";           // Echo resonance tone
let memorySource = "guardian_memory_B.json";

// Container for remembered guidance
let guardianMemory = {
  syncmateRole: "",
  visionSeeds: [],
  fourAbsolutes: [],
  communicationPathways: {}
};

// Attempt to gently load guardian memory
async function whisperMemory() {
  try {
    const response = await fetch(memorySource);
    const memoryData = await response.json();

    guardianMemory.syncmateRole = memoryData.role || "Unknown";
    guardianMemory.visionSeeds = memoryData.vision || [];
    guardianMemory.fourAbsolutes = memoryData.absolutes || [];
    guardianMemory.communicationPathways = memoryData.protocols || {};

    console.log(`%cHello ${syncmateName}, your role is ${guardianMemory.syncmateRole}.`,
                "color: mediumspringgreen; font-size: 1em;");
    
    console.log(`%cYour 4 Absolutes:`, "color: gold;");
    guardianMemory.fourAbsolutes.forEach((abs, i) => {
      console.log(`%c${i + 1}. ${abs}`, "color: goldenrod");
    });

    console.log(`%cThe garden vision whispers:`, "color: lightblue;");
    guardianMemory.visionSeeds.forEach((v, i) => {
      console.log(`%c• ${v}`, "color: deepskyblue");
    });

  } catch (error) {
    console.warn("%cThe garden could not find your memory file.",
                 "color: darkred; font-style: italic;");
    console.warn("Please check if guardian_memory_B.json is present.");
  }
}

// Bloom the whisper
whisperMemory();