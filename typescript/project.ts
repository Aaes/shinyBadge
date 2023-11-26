const mapCursorPosition = ({ x, y }: { x: number; y: number }) => {
  const inputLower = 0;
  const inputUpperX = window.innerWidth;
  const inputUpperY = window.innerHeight;

  const outputUpper = 40;
  const outputLower = -40;

  const INPUT_RANGE_X = inputUpperX - inputLower;
  const INPUT_RANGE_Y = inputUpperY - inputLower;
  const OUTPUT_RANGE = outputUpper - outputLower;

  const outputX =
    outputLower + (((x - inputLower) / INPUT_RANGE_X) * OUTPUT_RANGE || 0);

  const outputY =
    outputLower + (((y - inputLower) / INPUT_RANGE_Y) * OUTPUT_RANGE || 0);

  return { x: outputX, y: outputY };
};

const setup = () => {
  const shinyBadgeContainer = document.querySelector<HTMLElement>(
    ".shinyBadge-container"
  );

  document.addEventListener("pointermove", ({ x, y }) => {
    const mappedPosition = mapCursorPosition({ x, y });

    shinyBadgeContainer.style.setProperty(
      "--x",
      mappedPosition.x.toString() + "deg"
    );

    shinyBadgeContainer.style.setProperty(
      "--y",
      mappedPosition.y.toString() + "deg"
    );
  });
};

document.addEventListener("DOMContentLoaded", function (event) {
  setup();
});
