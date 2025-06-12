document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const ci = params.get("ci");
    const idioma = params.get("lang") || "es";

    const textos = {
        es: {
            color: "Mi color favorito es:",
            libro: "Mi libro favorito es:",
            musica: "Mi estilo de música preferido es:",
            videojuegos: "Mis videojuegos favoritos son:",
            lenguajes: "Lenguajes aprendidos:",
            contacto: "Si necesitan comunicarse conmigo me pueden escribir a: "
        },
        en: {
            color: "My favorite color is:",
            libro: "My favorite book is:",
            musica: "My favorite music style is:",
            videojuegos: "My favorite video games are:",
            lenguajes: "Languages learned:",
            contacto: "If you need to contact me, you can write to: "
        }
    };

    fetch("/ATI/index.py/DatosPerfiles")
        .then(response => response.json())
        .then(perfiles => {
            const perfil = perfiles.find(p => p.ci === ci);
            if (!perfil) {
                document.body.innerHTML = `<h2>No se encontró un perfill con CI ${ci}</h2>`;
                return;
            }

    const body = document.getElementById("Perfil");

    const formatos = ["jpg", "jpeg", "png"];
    const img = document.createElement("img");
    img.id = "ImagenPerfil";
    img.alt = "Foto de perfil";
    img.width = 300;
    img.height = 306;

    let index = 0;
    function intentarCargarImagen() {
    if (index < formatos.length) {
        img.src = `/ATI/${perfil.ci}/${perfil.ci}.${formatos[index]}`;
        img.onerror = () => {
            index++;
            intentarCargarImagen();
        };
    }
    }

    intentarCargarImagen();
    body.appendChild(img);

    const div = document.createElement("div");
    div.className = "UserInfo";

    const h2 = document.createElement("h2");
    h2.className = "Nombre";
    h2.innerText = perfil.nombre;
    div.appendChild(h2);
                const p = document.createElement("p");
            p.id = "Descripcion";
            p.innerText = perfil.descripcion || "";
            div.appendChild(p);

            const table = document.createElement("table");

            const fila = (label, valor) => {
                const tr = document.createElement("tr");
                const td1 = document.createElement("td");
                td1.innerText = label;
                const td2 = document.createElement("td");
                td2.innerText = Array.isArray(valor) ? valor.join(", ") : (valor || "");
                tr.appendChild(td1);
                tr.appendChild(td2);
                return tr;
            };

            table.appendChild(fila(textos[idioma].color, perfil.color));
            table.appendChild(fila(textos[idioma].libro, perfil.libro));            
            table.appendChild(fila(textos[idioma].musica, perfil.musica));                                                                                  table.appendChild(fila(textos[idioma].videojuegos, perfil.video_juego || perfil.videojuego));                                                   table.appendChild(fila(textos[idioma].lenguajes, perfil.lenguajes));

            div.appendChild(table);

            const contacto = document.createElement("p");
            contacto.innerText = textos[idioma].contacto;
                        const contactoLink = document.createElement("a");
            contactoLink.href = `mailto:${perfil.email}`;
            contactoLink.innerText = perfil.email;
            contacto.appendChild(contactoLink);

            div.appendChild(contacto);
            body.appendChild(div);
        })
        .catch(error => {
            console.error("Error al cargar los perfiles:", error);
            document.body.innerHTML = `<h2>Error al obtener los datos del perfil</h2>`;
        });
});