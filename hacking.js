// Obtener elementos
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');

const openTextModalBtn = document.getElementById('openTextModalBtn');
const closeTextModalBtn = document.getElementById('closeTextModalBtn');
const textModal = document.getElementById('textModal');

const whatsappBtn = document.getElementById('whatsappBtn');

// Abrir modal del QR al hacer clic en el botón de comprar
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Cerrar modal del QR al hacer clic en el botón de cerrar
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar modal del QR al hacer clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Abrir modal de texto adicional
openTextModalBtn.addEventListener('click', () => {
    textModal.style.display = 'flex';
});

// Cerrar modal de texto adicional
closeTextModalBtn.addEventListener('click', () => {
    textModal.style.display = 'none';
});

// Cerrar modal de texto adicional al hacer clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target === textModal) {
        textModal.style.display = 'none';
    }
});

// Redirigir a WhatsApp con página blanca en nueva pestaña
whatsappBtn.addEventListener('click', () => {
    // Abrir nueva ventana con página blanca
    const newTab = window.open('', '_blank'); // Abre una nueva pestaña/ventana

    // Configurar la página blanca en la nueva pestaña
    newTab.document.body.innerHTML = ''; // Limpia todo el contenido
    newTab.document.body.style.backgroundColor = 'white'; // Cambia el fondo a blanco
    newTab.document.body.style.height = '100vh'; // Altura completa de la página

    // Redirige a WhatsApp después de un breve retraso
    setTimeout(() => {
        newTab.location.href = "https://wa.me/message/QN4U4OXYVOSLB1"; // Cambia el enlace al mensaje deseado
    }, 0); // 0ms = 0 segundo
});
