const ventana = document.querySelector("#ventana");
const home = document.querySelector("#home");
const ventanaH = document.querySelector("#ventanaH");
const ventanaI = document.querySelector("#ventanaI");
const ventanaA = document.querySelector("#ventanaA");
const ventanaE = document.querySelector("#ventanaE");
const ventanaT = document.querySelector("#ventanaT");
const iconCerrar = document.querySelector("#icon-cerrar");
const musica = document.querySelector("#musica");
const boton = document.querySelector("#boton");
var header = document.querySelector("#header");

boton.addEventListener("click", () => {
  header.style.display = header.style.display === "block" ? "none" : "block";
  if(header.style.display === "block"){
    boton.textContent = '❌'
  }else{
    boton.textContent = '🏠'
  }
});

header.addEventListener("click", () => {
  header.style.display = header.style.display === "block" ? "none" : "block";
});

ventana.addEventListener("mouseover", (e) => {
  e.target.classList.remove("parpadea");
});

ventana.addEventListener("mouseout", () => {
  ventana.classList.add("parpadea");
});

ventanaH.addEventListener("mouseover", (e) => {
  e.target.classList.remove("parpadea");
});

ventanaH.addEventListener("mouseout", () => {
  ventanaH.classList.add("parpadea");
});

ventanaI.addEventListener("mouseover", (e) => {
  e.target.classList.remove("parpadea");
});

ventanaI.addEventListener("mouseout", () => {
  ventanaI.classList.add("parpadea");
});

ventanaA.addEventListener("mouseover", (e) => {
  e.target.classList.remove("parpadea");
});

ventanaA.addEventListener("mouseout", () => {
  ventanaA.classList.add("parpadea");
});

ventanaE.addEventListener("mouseover", (e) => {
  e.target.classList.remove("parpadea");
});

ventanaE.addEventListener("mouseout", () => {
  ventanaE.classList.add("parpadea");
});

ventanaT.addEventListener("mouseover", (e) => {
  e.target.classList.remove("parpadea");
});

ventanaT.addEventListener("mouseout", () => {
  ventanaT.classList.add("parpadea");
});

iconCerrar.addEventListener("click", () => {
  musica.classList.add("d-none");
  nuevo_audio.pause();
});

// reproductor
function cambiarTrack(track) {
  var value = track.getAttribute("value");
  viejo_audio = document.getElementById("reproductor");
  audio_padre = viejo_audio.parentNode;
  audio_padre.removeChild(viejo_audio);
  nuevo_audio = document.createElement("audio");
  nuevo_audio.setAttribute("id", "reproductor");
  nuevo_audio.setAttribute("controls", "controls");
  nuevo_audio.setAttribute("autoplay", "autoplay");
  source = document.createElement("source");
  source.setAttribute("src", value);
  source.setAttribute("type", "audio/mpeg");
  source.setAttribute("id", "reproductorSource");
  nuevo_audio.appendChild(source);
  audio_padre.appendChild(nuevo_audio);
}
function cargarReproductor() {
  var select = document.getElementById("selectTrack");
  var value = select.options[0].getAttribute("value");
  nuevo_audio = document.createElement("audio");
  nuevo_audio.setAttribute("id", "reproductor");
  nuevo_audio.setAttribute("controls", "controls");
  // nuevo_audio.setAttribute("autoplay", "autoplay");
  source = document.createElement("source");
  source.setAttribute("src", value);
  source.setAttribute("type", "audio/mpeg");
  source.setAttribute("id", "reproductorSource");
  nuevo_audio.appendChild(source);
  padre = document.getElementById("reproductorBox");
  padre.appendChild(nuevo_audio);
}
cargarReproductor();
