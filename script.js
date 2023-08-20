function volume_sphere() {
let radius=document.getElementById("radius");
	let rad=radius.value;
	const volume=document.getElementById("volume");
	volume.value=3.14*rad*rad*rad;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
