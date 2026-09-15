// Așteaptă ca documentul să fie încărcat complet
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Butonul plutitor "Înapoi sus"
    const btnTop = document.getElementById("btnTop");

    // Când utilizatorul derulează pagina, verifică cât de mult a coborât
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        // Dacă a derulat mai mult de 300px, arată butonul
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    }

    // Când se dă click pe buton, derulează lin la începutul paginii
    btnTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 2. Evidențierea link-ului activ din meniu la scroll
    const sections = document.querySelectorAll("div[id], header[id]");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener('scroll', function() {
        let current = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});