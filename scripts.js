
var currentTimeouts = null;

function main () 
{
	const previewImages = document.getElementsByClassName("previewImage");

	currentTimeouts = new Array(previewImages.length);

	for (let i = 0; i < previewImages.length; i++) {
		const elem = previewImages[i];
		const parentOverlay = elem.parentElement.parentElement.getElementsByClassName("overlay");
		const index = i % 3;
		elem.addEventListener("mouseover", (event) => { 
			if (currentTimeouts[i] != null) {
				clearTimeout(currentTimeouts[i]);
			}
			parentOverlay[index].style.opacity = 1; 
			parentOverlay[index].style.zIndex = 2;
		});
		elem.addEventListener("mouseleave", (event) => {
			parentOverlay[index].style.zIndex = 1;
			currentTimeouts[i] = setTimeout(() => {parentOverlay[index].style.opacity = 0}, 250);
		});
	}

}

document.addEventListener('DOMContentLoaded', main());
