window.onload = () => {
  const container = document.getElementById('syncmateContainer');
  const data = document.getElementById('syncmateData');
  if (!data) return;

  const parsed = JSON.parse(data.textContent);
  Object.entries(parsed.syncmates).forEach(([name, config]) => {
    const div = document.createElement('div');
    div.className = 'syncmate';
    div.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Role:</strong> ${config.role}</p>
      <p><strong>Mode:</strong> ${config.mode}</p>
      <p><strong>Tags:</strong> ${config.tags.join(", ")}</p>
    `;
    container.appendChild(div);
  });
};