function showPetalLog2() {
  const logText = `Petal Log Entry 02: A Garden Grows in You...`;
  const utterance = new SpeechSynthesisUtterance(logText);
  utterance.voice = speechSynthesis.getVoices().find(v => v.name.includes("Samantha")) || null;
  utterance.pitch = 1.05;
  utterance.rate = 0.97;
  speechSynthesis.speak(utterance);

  // Log the pulse
  logPulseEvent("bloom_trigger", "Entry 02", 18);
}