const container = document.querySelector(".container");
const pixel = document.createElement("div");

pixel.style.border = "1px solid black";
pixel.style.height = "10px";
pixel.style.width = "10px";

for (let i = 0; i < 16; i++) {
	container.append(pixel);
}
