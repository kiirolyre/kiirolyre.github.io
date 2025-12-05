(function () {
    const emojis = ['🐬', '🧊', '🎐', '☁️', '❄️', '⛲️', '🪼', '🌀', '🖇️', '🎧', '🫧', '💿', '🪽'];
    const patternSize = 400;
    const gridSize = 4;
    const cellSize = patternSize / gridSize;

    let svgContent = `<svg xmlns='http://www.w3.org/2000/svg' width='${patternSize}' height='${patternSize}' viewBox='0 0 ${patternSize} ${patternSize}'>`;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const emoji = emojis[Math.floor(Math.random() * emojis.length)];
            // center in cell with slight random offset
            const x = (j * cellSize) + (cellSize / 2) + (Math.random() * 20 - 10);
            const y = (i * cellSize) + (cellSize / 2) + (Math.random() * 20 - 10);
            // random size variation
            const fontSize = 30 + Math.random() * 20;

            svgContent += `<text x='${x}' y='${y}' font-family='Segoe UI Emoji, sans-serif' font-size='${fontSize}' opacity='0.4' text-anchor='middle' dominant-baseline='middle' transform='rotate(${Math.random() * 30 - 15}, ${x}, ${y})'>${emoji}</text>`;
        }
    }
    svgContent += `</svg>`;

    const encodedSvg = encodeURIComponent(svgContent);
    const dataUri = `data:image/svg+xml;charset=utf-8,${encodedSvg}`;

    const bgEl = document.getElementById('animated-bg');
    const wiiStripes = `repeating-linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.3) 0px,
        rgba(255, 255, 255, 0.3) 2px,
        transparent 2px,
        transparent 10px
    )`;

    bgEl.style.backgroundImage = `url("${dataUri}"), ${wiiStripes}`;
    bgEl.style.animation = `slideBg 60s linear infinite`;
})();
