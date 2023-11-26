let x = 0;
let y = 0;
let xIncreasing = false;
let yIncreasing = false;
let shinyBadgeContainer;
let shinyBadgeInner;
let lastAnimationtimeStamp;
const outputUpper = 40;
const outputLower = -40;
const mapCursorPosition = ({ x, y }) => {
    const inputLower = 0;
    const inputUpperX = window.innerWidth;
    const inputUpperY = window.innerHeight;
    const INPUT_RANGE_X = inputUpperX - inputLower;
    const INPUT_RANGE_Y = inputUpperY - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;
    const outputX = outputLower + (((x - inputLower) / INPUT_RANGE_X) * OUTPUT_RANGE || 0);
    const outputY = outputLower + (((y - inputLower) / INPUT_RANGE_Y) * OUTPUT_RANGE || 0);
    return { x: outputX, y: outputY };
};
const setup = () => {
    shinyBadgeContainer = document.querySelector(".shinyBadge-container");
    shinyBadgeInner = document.querySelector(".shinyBadge-inner");
    document.addEventListener("pointermove", ({ x, y }) => {
        const mappedPosition = mapCursorPosition({ x, y });
        setX(mappedPosition.x);
        setY(mappedPosition.y);
    });
};
const setX = (newX) => {
    shinyBadgeContainer.style.setProperty("--xdeg", x.toString() + "deg");
    shinyBadgeInner.style.setProperty("--x", x.toString());
    x = newX;
};
const setY = (newY) => {
    shinyBadgeContainer.style.setProperty("--ydeg", y.toString() + "deg");
    shinyBadgeInner.style.setProperty("--y", y.toString());
    y = newY;
};
const animate = () => {
    window.requestAnimationFrame((timestamp) => {
        if (!lastAnimationtimeStamp || timestamp - lastAnimationtimeStamp > 20) {
            let newX = x;
            if (xIncreasing) {
                newX = x + 0.6;
            }
            if (!xIncreasing) {
                newX = x - 0.6;
            }
            if (x <= outputLower) {
                xIncreasing = true;
            }
            if (x >= outputUpper) {
                xIncreasing = false;
            }
            setX(newX);
            setY(y);
            lastAnimationtimeStamp = timestamp;
        }
        animate();
    });
};
document.addEventListener("DOMContentLoaded", function (event) {
    setup();
    lastAnimationtimeStamp = 0;
    animate();
});
//# sourceMappingURL=shinyBadge.js.map