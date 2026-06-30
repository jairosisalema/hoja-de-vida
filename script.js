// ===== MOSTRAR SALUDO Y AÑO ACTUAL =====
document.addEventListener('DOMContentLoaded', function() {
    const yearDisplay = document.getElementById('year-display');
    if (yearDisplay) {
        // Obtener saludo según la hora
        const hours = new Date().getHours();
        let saludo = '';
        
        if (hours < 12) saludo = '🌅 Buenos días';
        else if (hours < 18) saludo = '☀️ Buenas tardes';
        else saludo = '🌙 Buenas noches';
        
        // Obtener año actual
        const currentYear = new Date().getFullYear();
        
        // Mostrar todo junto
        yearDisplay.innerHTML = `${saludo} | © ${currentYear} Jairo Sisalema. Todos los derechos reservados.`;
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
    
    const btn = document.querySelector('.btn-interact');
    if (btn) {
        const textoOriginal = btn.innerHTML;
        btn.innerHTML = `<i class="fas fa-check-circle"></i> ${mensajeAleatorio}`;
        btn.style.background = '#28a745';
        
        setTimeout(() => {
            btn.innerHTML = textoOriginal;
            btn.style.background = '';
        }, 3000);
    }
}

// ===== ANIMACIÓN DE BARRAS DE HABILIDADES =====
document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                bar.style.boxShadow = '0 0 15px rgba(0, 123, 255, 0.3)';
            }
        });
    };
    
    window.addEventListener('scroll', animateSkillBars);
    animateSkillBars();
});

// ===== DETECTAR CUANDO LA PÁGINA ESTÁ LISTA =====
console.log('🚀 Hoja de Vida de Jairo Sisalema cargada exitosamente');
console.log('📧 Contacto: sisalemajairo469@gmail.com');