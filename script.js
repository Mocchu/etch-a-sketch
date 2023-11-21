const container = document.querySelector(".container");
const button = document.querySelector("button");

changeGridSize();

button.addEventListener("click", () => {
	userInput = prompt("How many squares per side?");
	if (userInput <= 0 || userInput > 100) {
		alert("Grid size must be between 1-100 (inclusive)");
	} else {
		changeGridSize(userInput);
	}
});

function changeGridSize(size = 4) {
	resetGridSize();
	for (let i = 0; i < size ** 2; i++) {
		pixel = createPixel(size);
		container.append(pixel);
	}
}

function resetGridSize() {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
}

function createPixel(size) {
	const pixel = document.createElement("div");
	const pixelsPerSide = String(100 / size) + "%";

	pixel.classList.add("pixel");
	pixel.style.height = pixelsPerSide;
	pixel.style.width = pixelsPerSide;
	pixel.style.opacity = 1;

	pixel.addEventListener("mouseover", (e) => {
		let currentOpacity = e.target.style.opacity;
		e.target.style.opacity = currentOpacity - 0.1;
	});

	return pixel;
}
