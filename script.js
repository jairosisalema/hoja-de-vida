// ===== MOSTRAR AÑO ACTUAL =====
document.addEventListener('DOMContentLoaded', function() {
    const yearDisplay = document.getElementById('year-display');
    if (yearDisplay) {
        const currentYear = new Date().getFullYear();
        yearDisplay.innerHTML = `© ${currentYear} Jairo Sisalema. Todos los derechos reservados.`;
    }
});

// ===== FUNCIÓN DEL BOTÓN "CONECTAR" =====
function mostrarMensaje() {
    const mensajes = [
        "¡Hola! 👋 Estoy listo para colaborar en proyectos tecnológicos.",
        "¡Conectemos! 🚀 Juntos podemos crear soluciones increíbles.",
        "¡Gracias por visitar mi perfil! 💻 Estoy disponible para nuevas oportunidades.",
        "¡Tecnología y pasión! 🔧 Siempre aprendiendo cosas nuevas."
    ];
    
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    
    // Usar una alerta mejorada
    const btn = document.querySelector('.btn-interact');
    if (btn) {
        // Cambiar temporalmente el texto del botón
        const textoOriginal = btn.innerHTML;
        btn.innerHTML = `<i class="fas fa-check-circle"></i> ${mensajeAleatorio}`;
        btn.style.background = '#28a745';
        
        setTimeout(() => {
            btn.innerHTML = textoOriginal;
            btn.style.background = ''; // Restaurar color original
        }, 3000);
    }
}

// ===== ANIMACIÓN DE BARRAS DE HABILIDADES AL SCROLL =====
document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    // Función para animar barras cuando son visibles
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                // La barra ya tiene su ancho definido en el HTML
                // Solo añadimos un efecto de brillo
                bar.style.boxShadow = '0 0 15px rgba(0, 123, 255, 0.3)';
            }
        });
    };
    
    // Ejecutar al cargar y al hacer scroll
    window.addEventListener('scroll', animateSkillBars);
    animateSkillBars();
});

// ===== EFECTO DE TIPEO EN EL TÍTULO =====
document.addEventListener('DOMContentLoaded', function() {
    const titleElement = document.querySelector('.profile .title');
    if (titleElement) {
        const originalText = titleElement.textContent;
        let index = 0;
        let isDeleting = false;
        
        // Función para efecto de tipeo (solo si quieres un efecto adicional)
        // Por ahora lo dejamos simple
    }
});

// ===== SALUDO PERSONALIZADO SEGÚN LA HORA =====
document.addEventListener('DOMContentLoaded', function() {
    const hours = new Date().getHours();
    let saludo = '';
    
    if (hours < 12) saludo = '🌅 Buenos días';
    else if (hours < 18) saludo = '☀️ Buenas tardes';
    else saludo = '🌙 Buenas noches';
    
    // Agregar saludo sutil en el footer
    const yearDisplay = document.getElementById('year-display');
    if (yearDisplay) {
        const currentText = yearDisplay.innerHTML;
        // No sobrescribir, solo agregar si existe
    }
});

console.log('🚀 Hoja de Vida de Jairo Sisalema cargada exitosamente');
console.log('📧 Contacto: sisalemajairo469@gmail.com');