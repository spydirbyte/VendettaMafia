// Clear current page
document.head.innerHTML = `
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
`;
document.body.innerHTML = "";
document.body.style = "margin:0;padding:0;background:#000;color:#00ffaa;font-family:'Courier New',Courier,monospace;overflow:hidden;";

// Inject styles
const style = document.createElement("style");
style.innerHTML = `
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Courier New', Courier, monospace;
    background: #000;
    color: #00ffaa;
    overflow: hidden;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1200px;
  }
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .box {
    position: relative;
    z-index: 2;
    width: 95vw;
    max-width: 680px;
    padding: 20px 15px;
    background: rgba(0, 0, 0, 0.85);
    border: 2px solid #00ffaa;
    border-radius: 16px;
    box-shadow: 0 0 40px #00ffaa55, 0 0 100px #00ffaa33, inset 0 0 30px #00ffaa22;
    transform-style: preserve-3d;
    transition: transform 0.1s ease-out;
    text-align: center;
  }
  .logo {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 3px solid #ff0040;
    box-shadow: 0 0 25px #ff0040aa, 0 0 60px #ff0040cc;
    margin-bottom: 20px;
  }
  h1 {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    color: #00ffee;
    text-shadow: 0 0 12px #00ffee, 0 0 25px #00ffeeaa;
    margin-bottom: 18px;
  }
  .signature {
    font-size: clamp(0.9rem, 2.5vw, 1.2rem);
    color: #ff0040;
    margin-bottom: 20px;
    text-shadow: 0 0 10px #ff0040, 0 0 25px #ff0040aa;
  }
  .terminal {
    font-size: clamp(0.85rem, 2.2vw, 1rem);
    background: rgba(0, 0, 0, 0.3);
    border: 1px dashed #00ffaa;
    padding: 10px;
    color: #00ffcc;
    margin-bottom: 20px;
    text-align: left;
    white-space: pre-wrap;
    box-shadow: 0 0 10px #00ffaa55;
  }
  .message {
    font-size: clamp(0.9rem, 2.5vw, 1.1rem);
    margin: 20px 0 10px;
    color: #00ffee;
    text-shadow: 0 0 8px #00ffee;
    white-space: pre-wrap;
    min-height: 80px;
  }
  .twitter-link {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 18px;
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    color: #ff0040;
    text-decoration: none;
    border: 1px solid #ff0040;
    border-radius: 6px;
    box-shadow: 0 0 12px #ff004088;
    transition: 0.3s ease;
  }
  .twitter-link:hover {
    background: #ff0040;
    color: #000;
    box-shadow: 0 0 30px #ff0040;
  }
  #manifesto {
    display: none;
    position: fixed;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    color: #00ffaa;
    background: rgba(0, 0, 0, 0.85);
    padding: 10px 16px;
    border: 1px solid #00ffaa;
    text-shadow: 0 0 10px #00ffaa;
    z-index: 999;
  }
  #secret-btn {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    z-index: 1000;
  }
`;
document.head.appendChild(style);

// Inject HTML
document.body.innerHTML = `
<canvas id="galaxy-bg"></canvas>
<div class="box" id="galaxy-box">
  <img class="logo" src="https://pbs.twimg.com/profile_images/1914461872730107904/Ts5wkGrT_400x400.jpg" alt="VendettaMafia Logo" />
  <h1>GREETINGS WORLD</h1>
  <div class="signature">
    Hacked By <strong>AnonSpyDir</strong> aka <strong>SpyDirByte</strong><br>
    <em>VendettaMafia • AnonOpsVendetta</em>
  </div>
  <div class="terminal">
root@anonymous:/# injecting payload...<br>
target response: 200 OK<br>
payload status: <span style="color:#00ff88;">executed</span><br>
compromised system: <strong style="color:#ff0040;">FUCK YOUR SITE</strong>
  </div>
  <div class="message" id="typed-text"></div>
  <a href="https://x.com/xVENDETTAMAFIAx" class="twitter-link" target="_blank">↳ CONNECT ON X</a>
</div>
<div id="secret-btn" title="Click to reveal..."></div>
<div id="manifesto">We are the silence in your systems. We do not forget. Expect us.</div>
`;

// Inject script behavior
(function () {
  const text = `
We are VendettaMafia.

The breach began lightyears ago...

Now your silence is permanent.`;
  const target = document.getElementById('typed-text');
  let i = 0;
  function type() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 30);
    }
  }
  window.onload = type;

  const box = document.getElementById('galaxy-box');
  if (!('ontouchstart' in window)) {
    document.addEventListener('mousemove', e => {
      const x = (window.innerWidth / 2 - e.pageX) / 30;
      const y = (window.innerHeight / 2 - e.pageY) / 30;
      box.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
  }

  const canvas = document.getElementById('galaxy-bg');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const stars = Array.from({ length: 300 }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    z: Math.random() * canvas.width
  }));

  function drawGalaxy() {
    ctx.fillStyle = '#000011';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
      const k = 128.0 / star.z;
      const x = (star.x - canvas.width / 2) * k + canvas.width / 2;
      const y = (star.y - canvas.height / 2) * k + canvas.height / 2;
      const radius = 0.7 * k;
      if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) continue;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = '#00ffaa';
      ctx.fill();
      star.z -= 2;
      if (star.z <= 0) star.z = canvas.width;
    }
    requestAnimationFrame(drawGalaxy);
  }
  drawGalaxy();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }, 100);
  });

  document.getElementById("secret-btn").onclick = () => {
    document.getElementById("manifesto").style.display = "block";
  };
})();
