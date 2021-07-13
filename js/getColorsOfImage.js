export function getColorByURL(url) {
	var canvas = document.createElement("canvas");
	canvas.width = 50;
	canvas.height= 50;

	var img = document.createElement("img");
	img.src = url;

	var ctx = canvas.getContext("2d");
	ctx.drawImage(img,-450,100);
	var dataStr = canvas.toDataURL("image/png");
	window.location=dataStr;
}