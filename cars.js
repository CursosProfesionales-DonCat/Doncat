let cars = JSON.parse(localStorage.getItem("cars")) || [];

function guardarCars() {
    localStorage.setItem("cars", JSON.stringify(cars));
    renderCars();
}

function toggleCurso(nombre, precio, imagen) {
    const index = cars.findIndex(item => item.nombre === nombre);
    if (index !== -1) {
        cars.splice(index, 1);
    } else {
        cars.push({ nombre, precio, imagen });
    }
    guardarCars();
    actualizarContador();
    actualizarBotones();
}

function actualizarContador() {
    document.getElementById("contador-cars").textContent = cars.length;
}

function renderCars() {
    const lista = document.getElementById("lista-cars");
    lista.innerHTML = "";
    let total = 0;

    cars.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${item.imagen}" width="30" style="border-radius:5px;"> 
            <div style="flex: 1;">${item.nombre} - S/ ${item.precio}</div>
            <button onclick="eliminarCurso(${index})" style="
                background: red;
                color: white;
                border: none;
                border-radius: 50%;
                width: 24px;
                height: 24px;
                font-size: 14px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
            ">✕</button>
        `;
        lista.appendChild(li);
        total += parseFloat(item.precio);
    });

    document.getElementById("total-cars").textContent = total.toFixed(2);
}

function eliminarCurso(index) {
    cars.splice(index, 1);
    guardarCars();
    actualizarContador();
    actualizarBotones();
}

function toggleCars() {
    const modal = document.getElementById("modal-cars");
    modal.style.display = modal.style.display === "block" ? "none" : "block";
    document.getElementById("modal-pagos").style.display = "none"; // Cierra pago si está abierto
}

function mostrarPagos() {
    document.getElementById("modal-pagos").style.display = "block";
}

function cerrarPagos() {
    document.getElementById("modal-pagos").style.display = "none";
}

function actualizarBotones() {
    document.querySelectorAll(".cars-curso").forEach(div => {
        const nombre = div.querySelector("h3").textContent.trim();
        const boton = div.querySelector("button");
        const enCars = cars.find(item => item.nombre === nombre);
        if (enCars) {
            boton.classList.add("seleccionado");
            boton.textContent = "Eliminar de Cars";
        } else {
            boton.classList.remove("seleccionado");
            boton.textContent = "Añadir a Cars";
        }
    });
}

// 🔒 Eventos para mostrar/cerrar modales de pago (Yape/Plin e Interbancario/Paypal)
document.addEventListener("DOMContentLoaded", () => {
    const modalQR = document.getElementById("modal");
    const textModal = document.getElementById("textModal");

    // Botones para abrir modales
    const openModalBtn = document.getElementById("openModalBtn");
    const openTextModalBtn = document.getElementById("openTextModalBtn");

    if (openModalBtn) {
        openModalBtn.addEventListener("click", () => {
            modalQR.style.display = "block";
        });
    }

    if (openTextModalBtn) {
        openTextModalBtn.addEventListener("click", () => {
            textModal.style.display = "block";
        });
    }

    // Botones para cerrar modales
    const closeQRBtn = document.getElementById("closeModalBtn");
const closeTextBtn = document.getElementById("closeTextModalBtn");

if (closeQRBtn) {
    closeQRBtn.addEventListener("click", () => {
        modalQR.style.display = "none";
    });
}

if (closeTextBtn) {
    closeTextBtn.addEventListener("click", () => {
        textModal.style.display = "none";
    });
}


    // Cerrar al hacer clic fuera del modal
    window.addEventListener("click", (e) => {
        if (e.target === modalQR) modalQR.style.display = "none";
        if (e.target === textModal) textModal.style.display = "none";
    });
});
// 🎯 Control independiente de modales de pago en carrito
document.addEventListener("DOMContentLoaded", () => {
    const modalQR_Cars = document.getElementById("modalPagoQR");
    const modalText_Cars = document.getElementById("modalPagoText");

    const openQR = document.getElementById("openModalPagoQR");
    const openText = document.getElementById("openModalPagoText");

    const closeQR = document.getElementById("closeModalPagoQR");
    const closeText = document.getElementById("closeModalPagoText");

    if (openQR) openQR.addEventListener("click", () => modalQR_Cars.style.display = "block");
    if (openText) openText.addEventListener("click", () => modalText_Cars.style.display = "block");

    if (closeQR) closeQR.addEventListener("click", () => modalQR_Cars.style.display = "none");
    if (closeText) closeText.addEventListener("click", () => modalText_Cars.style.display = "none");


    // Cierra si haces clic fuera del modal
    window.addEventListener("click", (e) => {
        if (e.target === modalQR_Cars) modalQR_Cars.style.display = "none";
        if (e.target === modalText_Cars) modalText_Cars.style.display = "none";
    });
});
