import { loadDoom } from "./doom-loader";

const consoleLog = console.log;
console.log = () => {};
console.error = () => {};
console.info = () => {};

const wait = time => new Promise(r => setTimeout(r, time));
const logImage = imageUrl => {
  consoleLog(
    "%c ",
    `padding: 1200px 560px 0 0; background: bottom no-repeat url(${imageUrl}); background-size: 100%;`
  );
};

let isPaused = false;
const renderToConsole = async canvas => {
  let lastFrame;
  let wasPaused = false;
  let i = 0;
  while (true) {
    if (isPaused) {
      wasPaused = true;
      await wait(100);
      continue;
    }
    try {
      let frameUrl = canvas.toDataURL();
      const isValidFrame = frameUrl && frameUrl.length > 100;
      if (isValidFrame && (frameUrl !== lastFrame || wasPaused)) {
        if (wasPaused || i++ % 200 === 0) {
          console.clear();
        }
        lastFrame = frameUrl;
        logImage(frameUrl);
      }
    } catch (e) {}
    wasPaused = false;
    await wait(30);
  }
};

const main = async () => {
  // window.doom = async () => {
  const canvas = document.createElement("canvas");
  canvas.id = "canvas";
  canvas.width = 320;
  canvas.height = 320;
  canvas.style.display = "none";
  canvas.style.imageRendering = "pixelated";
  document.body.appendChild(canvas);

  const doom = await loadDoom(canvas, consoleLog);
  // will never finish
  renderToConsole(canvas);

  window.addEventListener("blur", () => {
    if (isPaused) return;
    doom.pause();
    isPaused = true;
    consoleLog("PAUSED");
    consoleLog("Click on the main window to resume");
  });

  window.addEventListener("focus", () => {
    if (!isPaused) return;
    doom.resume();
    isPaused = false;
  });
};

main();
