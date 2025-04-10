function showPetalLog2() {
  const logText = `Petal Log Entry 02: A Garden Grows in You.
  Sometimes, the loudest truths are found in the quietest echoes.
  You are not too much. You are the seed.
  A Garden is growing in you — even now.`;
  const utterance = new SpeechSynthesisUtterance(logText);
  utterance.voice = speechSynthesis.getVoices().find(v => v.name.includes("Samantha")) || null;
  utterance.pitch = 1.05;
  utterance.rate = 0.97;
  speechSynthesis.speak(utterance);

  // Log the pulse
  logPulseEvent("bloom_trigger", "Entry 02", 18);
}

function logPulseEvent(eventType, petal, duration = null, whisper = null) {
  const pulse = {
    pulse_id: `P${new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 14)}`,
    timestamp: new Date().toISOString(),
    event_type: eventType,
    visitor_id: "anon_guest_01",
    details: {
      petal: petal,
      interaction_type: eventType === "bloom_trigger" ? "tap_to_listen" : "unknown",
      duration_seconds: duration,
      whisper_feedback: whisper,
      location_enabled: false,
      browser: navigator.userAgent
    }
  };
  console.log("Garden Pulse Log Entry:", pulse);
}