document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const idioma = params.get("lang") || "es";           
    const textos = {                               
            es: {                                  
                saludo: "Hola, Jhonatan Homsany",  
                busqueda: "Nombre",           
                boton: "Buscar",            
                mensaje: "No hay alumnos que tengan en su nombre: ",     
                copyright: "Copyright © 2025 Escuela de computación - ATI..  Todos los derechos reservados"  
            },                  
            en: {             
                saludo: "Hello, Jhonatan Homsany",
                busqueda: "Name", 
                boton: "Search",          
                mensaje: "No students have the name: ", 
                copyright: "Copyright © 2024 Computer school - ITA. All rigghts reserved"        
            }
    };
    document.getElementsByTagName("li")[1].innerText = textos[idioma].saludo; 
    document.getElementsByTagName("input")[0].setAttribute("placeholder", textos[idioma].busqueda);     
    document.getElementsByTagName("button")[0].innerText = textos[idioma].boton;     
    document.getElementsByTagName("footer")[0].innerText = textos[idioma].copyright;         
    
    const ul = document.getElementsByTagName("ul")[1]; 
    const input = document.getElementsByTagName("input")[0]; 

    
    function renderPerfiles(filteredPerfiles) {
        ul.innerHTML = "";
        if (filteredPerfiles.length === 0) {
            const mensaje = document.createElement("p");
            mensaje.innerText = textos[idioma].mensaje + input.value;
            mensaje.setAttribute("id", "NoResultsFound");
            ul.appendChild(mensaje);
        } else {
            filteredPerfiles.forEach(perfil => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.href = `/ATI/index.py/perfil?ci=${perfil.ci}&lang=${idioma}`;

                const section = document.createElement("section");
                section.classList.add("User");

                const img = document.createElement("img");
                img.src = `/ATI/${perfil.imagen}`;
                img.alt = "Foto de perfil";
                img.width = 150;
                img.height = 150;

                const p = document.createElement("p");
                p.innerText = perfil.nombre;

                section.appendChild(img);
                section.appendChild(p);
                a.appendChild(section);
                ul.appendChild(a);
            });
        }
     }

    fetch("/ATI/index.py/perfiles")
        .then(response => response.json())
        .then(data => {
            let perfiles = data;

            renderPerfiles(perfiles);

            button.addEventListener("click", () => {
                const searchText = input.value.toLowerCase();
                const filtered = perfiles.filter(p => p.nombre.toLowerCase().includes(searchText));
                renderPerfiles(filtered);
            });
        })
        .catch(error => {
            console.error("Error al cargar perfiles:", error);
            ul.innerHTML = "<p>Error al cargar los perfiles.</p>";
        });
});

