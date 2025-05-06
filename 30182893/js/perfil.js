const perfiles = [
    {
        "nombre": "Betty Torres",
        "descripcion": "Ingeniero de Sistemas, experiencia en sistemas para recursos humanos, áreas contables, administrativas, industria de telecomunicaciones, de atención al cliente y electorales. Años de desempeño en planificación de proyectos, coordinación de equipos de desarrollo,  seguimiento con metodologías ágiles y puesta en producción de soluciones tecnológicas.",
        "color": "Naranja y Negro",
        "libro": "Ilusiones de Richard Bach",
        "musica": "Romantica y Salsa",
        "video_juego": ["Call of Duty","Minecraft"],
        "lenguajes": ["PL/SQL", "Java", "JavaScript"],
        "email": "bettytores@gmail.com",
        "ci": "13852255",
        "genero": "femenino",
        "fecha_nacimiento": "17/11/1979",
        "imagen": "13852255.png"
    },

    {	
        "nombre":"María Paula Herrero",
        "descripcion":"Soy licenciada en Computación de la UCV. Me desempeño en el área de ingeniería web y actualmente doy clases en la Escuela de Computación de la UCV. Además, desde el 2007 he venido desarrollando una segunda carrera como escritora e ilustradora. He participado en diversos talleres de escritura y actualmente estudio diseño gráfico en Prodiseño.",
        "color": "Azul",
        "libro": ["El Señor de los Anillos"],
        "musica": ["Cualquiera menos regueton"],
        "video_juego": ["Pokemón Go"],
        "lenguajes":["java", "php", "perl", "ruby", "python", "c++"],
        "email":"mpaulaherrero@gmail.com",
        "ci":"14444733",
        "genero": "femenino",
        "fecha_nacimiento":"18/08/1972",
        "imagen": "14444733.jpg"
    },

    {	
        "nombre":"Abelardo José Moreno Carballeda",
        "descripcion":"Soy estudiante de computación en el último semestre de la carrera. Me interesa el área de Inteligencia de Negocios y actualmente trabajo en el Fondo de Valores Inmobiliarios.",
        "color": "Verde",
        "libro": ["The Hitchhiker's Guide to the Galaxy."],
        "musica": ["Retro."],
        "video_juego": ["Punch-Out","Dark Souls"],
        "lenguajes": ["Java", "C", "C++", "Python", "SQL", "Haskell", "Prolog", "Ensamblador"],
        "email":"abelardo.moreno@gmail.com",
        "ci":"18002106",
        "genero":"masculino",
        "fecha_nacimiento":"19/12/1988"
    },

    {	
        "nombre":"Jimmy E. Espino B.",
        "descripcion":"Soy estudiante de licenciatura de computación de la UCV. Trabajo en el departamento de servicio técnico de una compañía de ventas. Presto trabajo social en un centro juvenil en donde se trabaja con niñ@s de 8 a 17 años, el cual es llevado por la congregación salesiana.Tengo como hobbie el futbol, la animación y el trabajo con material de sonido.",
        "color": "Azul",
        "libro": ["Símbolo Perdido"],
        "musica": ["Electrónica"],
        "video_juego":["Assasin Creed"],
        "lenguajes": ["Java","C", "HTML"],
        "email":"jimmyespino415@gmail.com",
        "ci":"18009154",
        "genero":"Masculino",
        "fecha_nacimiento":"28/12/1990"
    },

    {	
        "nombre":"Karl Correa",
        "descripcion":"Soy estudiante de Computación en la UCV. Me interesa el área de innovación tecnológica en el ámbito web. Trabajo en el área de educación a distancia dando soporte a los usuarios del Campus Virtual UCV.",
        "color": "Verde",
        "libro": ["Guardianes de la noche"],
        "musica": ["Cualquiera a excepción del vallenato, cumbia y regueton"],
        "video_juego": ["Final fantasy's series", "TES: Skyrim", "League of Legends", "Archeage"],
        "lenguajes": ["java", "c/c++", "python"],
        "email":"karl.correa.88@gmail.com",
        "ci":"18110561",
        "genero": "masculino",
        "fecha_nacimiento":"23/04/1988"
    },

    {
        "nombre": "Diego Branco",
        "descripcion": "Soy un estudiante de computación de la facultad de Ciencias de la Universidad Central de Venezuela, y me planeo graduar con la mención \"Ingeniería de Software\".",
        "color": "Verde",
        "libro": ["La Isla Misteriosa, Julio Verne"],
        "musica": ["Soundtracks", "Rock", "Metal"],
        "video_juego": ["Final Fantasy", "Pokémon", "Shin Megami Tensei", "etc)"],
        "lenguajes": ["C","C++","Python","Java"],
        "email": "diegoh89@gmail.com",
        "ci": "18443368",
        "genero": "masculino",
        "fecha_nacimiento": "14/06/1989"
    },

    {	
        "nombre":"Hector Palomino",
        "descripcion":"Soy estudiante de la Licenciatura en Computación de la UCV. Interesado en la Ciencia de Datos y en el desarrollo web. Me gusta leer,estudiar,hacer deporte,escuchar musica, compartir con amigos, la playa, etc.",
        "color": "Azul",
        "libro": ["Cien Años de Soledad"],
        "musica": ["Cualquiera"],
        "video_juego": ["Super Mario", "FIFA", "PES", "Resident Evil"],
        "lenguajes":["Java", "C", "C++", "R","SQL"],
        "email":"hectorjosepalomino@gmail.com",
        "ci":"18487832",
        "genero": "masculino",
        "fecha_nacimiento":"28/04/1990"
    },

    {
        "nombre": "Darwin R. Guaimacuto N.",
        "descripcion": "Soy estudiante de Licenciatura en Computación de la UCV, estoy interesado en el área de Big Data, Minería de Datos e Inteligencia de Negocios. Me gusta Jugar Videojuegos, Leer, Hacer Ejercicio, Estudiar, Aprender cosas nuevas, entre otras.",
        "color": "Negro",
        "libro": ["Me gustan varios"],
        "serie": ["Breaking Bad"],
        "musica": ["Rock"],
        "video_juego": ["Super Mario", "The Legend of Zelda", "The Last of Us", "Gears of War", "RE", "Silent Hill", "entre otros"],
        "lenguajes": ["C++", "HTML", "R", "Phyton", "Java", "PL/SQL"],
        "email": "dguaima@gmail.com",
        "ci": "18819509",
        "genero": "Masculino",
        "fecha_nacimiento": "31/03/1990"
    },

    {	
        "nombre":"Leopoldo Enrique Izquierdo Carias",
        "descripcion":"Soy estudiante de computacion en la Universidad Central de Venezuela. Tengo inclinacion por la rama de computacion grafica, y espero adquirir los suficientes conocimientos de esa área para lograr emprender por mi cuenta desarrollando aplicaciones moviles que hagan uso del API grafico.",
        "color": "Verde",
        "libro": ["El caballero de la armadura oxidada"],
        "musica": ["Reggae"],
        "video_juego": ["Zelda: Ocarina Of Time"],
        "lenguajes":["Java", "C/C++", "Javascript", "Python"],
        "email":"leopoldo.izquierdo.xyz@gmail.com",
        "ci":"18829705",
        "genero":"masculino",
        "fecha_nacimiento":"12/09/1988"
    },

    {
        "nombre": "Jorge Gavidia",  
        "descripcion":"Soy estudiante de la licenciatura de Computación de la UCV. Me especializo en el área de Redes de comunicaciones, servidores y VoIp, trabajo en la empresa Gare Network Developed como analista de redes y sistemas. Combino mi tiempo libre con actividades de deportes extremo como la Escalada, Canyoning, adicionalmente practico el montañismo y excursionismo.",
        "color": "Azul", 
        "libro":["El Principito"], 
        "musica":["En realidad es variado, no me límito a uno solo"], 
        "video_juego":["Counter Strike"], 
        "lenguajes":["C", "C++", "Java", "Haskell", "Prolog"],
        "email":"jorgega99@hotmail.com",
        "ci":"18836874",    
        "genero":"masculino",
        "fecha_nacimiento":"24/04/1989"
    },

    {	
        "nombre":"Felix Garcia",
        "descripcion":"Estudiante de la escuela de computación de la Universidad Central de Venezuela. Preparador del laboratorio de Comunicación de Datos. Gocho de San Cristoche, criado toda mi vida en Caracas, nunca falta un buen avilazo.",
        "color": "Azul",
        "libro": ["Canción de hielo y Fuego"],
        "musica": ["Rock y Pop (80's)"],
        "video_juego": ["Rocket League", "Dota2", "Counter Strike Global Offensive"],
        "lenguajes":  ["C","C++","Html","Phyton","Java","php"],
        "email":"FG.SOS.STORE@gmail.com",
        "ci":"18938455",
        "genero":"masculino",
        "fecha_nacimiento":"26/07/1989"
    },

    {
        "nombre":"Zulay Pineda",
        "descripcion":"Soy estudiante de la Licenciatura en Computación de las menciones de Inteligencia Artificial y Bases de Datos, practico los idiomas ingles y frances y en mi tiempo libre me gusta leer.",
        "color": "morado",
        "libro": ["Ogullo y Prejuicio"],
        "musica": ["pop-rock"],
        "videojuego": ["The sims y simcity"],
        "lenguajes":["Java", "C++", "Javascript", "PHP"],
        "email":"zulay.pineda.19@gmail.com",
        "ci":"19267152",
        "genero":"femenino",
        "fecha_nacimiento":"16/01/1990"
    },

    {
        "nombre": "Adrian Montes de Oca",
        "descripccion": "Soy bachiller y actualmente estudiante de la escuela de Computación de la UCV. Además, trabajo desde hace unos meses como desarrollador web para una empresa con la cual he logrado adquirir experiencia en el área. Por otro lado, estoy haciendo un curso para dominar el idioma ingles el cual estaré culminando próximamente, y un curso para el desarrollo de aplicaciones en Android.",
        "color": "Verde Manzana",
        "libro": ["El Principito"],
        "musica": ["Varios"],
        "video_juego": ["Counter Strike", "FIFA"],
        "lenguajes": [ "C++","Java","Javascript", "PHP", "HTML","CSS","Bootstrap"],
        "email": "adrian.a.montesdeoca.m@gmail.com",
        "ci": "19334139",
        "genero": "Masculino",
        "fecha_nacimiento": "11/01/1989"
    },

    {
        "nombre":"Raquel Escalante Salazar",
        "descripcion":"Soy estudiante de Licenciatura en Computación, interesada en las áreas de Desarrollo Web, Redes e Inteligencia Artificial. Siempre he tenido cierta pasión por el diseño gráfico y como hobby, me gusta practicarlo con manipulación de imágenes, lo cual me ha impulsado a ver el desarrollo en el área visual e interactiva como una profesión viable y que podría disfrutar muchísimo.",
        "color": "Magenta",
        "libro": ["El Conde de Montecristo"],
        "musica":["Rock", "Chillstep", "Soundtracks"],
        "video_juego":["Halo","Ace Attorney"],
        "lenguajes":["Python","JavaScript","C++","R"],
        "email":"escalante.raquelj@gmail.com",
        "ci":"19371273",
        "genero":"femenino",
        "fecha_nacimiento":"16/08/1990"
    },

    {
        "nombre":"Gabriel Restrepo",
        "descripcion": "Soy bachiller técnico medio en electrónica. Actualmente me encuentro en el 8º semestre de la licenciatura en computación en la gloriosa UNIVERSIDAD CENTRAL DE VENEZUELA. Me gusta el desarrollo web y las redes. Quiero aprender cada día más.",
        "color": "Gris",
        "libro": ["Harry Potter"],
        "musica": ["Todo menos Vallenato"],
        "video_juego":["Fifa"],
        "lenguajes":["C", "C++", "Java", "MySql", "Oracle"],
        "email":"gabo1gara@gmail.com",
        "ci":"19379860",
        "genero":"Masculino",
        "fecha_nacimiento":"25/05/1989"
    },

    {
        "nombre": "Katherine Colina",
        "descripcion": "Soy estudiante del 7mo semestre de la Licenciatura en computación de la UCV. Me gusta el area de Bases de Datos y la Mineria de Datos por lo cual me interesa especializarme en ambas areas, aprendiendo cada dia algo nuevo y en este caso HTML. Apasionada por el senderismo,el excursionismo y las acampadas.",
        "color": "Naranja",
        "libro": ["Muerte en el Nilo"],
        "musica": ["Rock de los 80"],
        "video_juego": ["Need for Speed"],
        "lenguajes":["C/C++","SQL","Java"],
        "ci":"19499302",
        "genero":"femenino",
        "fecha_nacimiento":"28/11/1990",
        "email":"kathymcolina@gmail.com"
    },

    {
        "nombre":"Jhonny Morales",
        "descripcion":"Soy estudiante de Licenciatura en Computación en la UCV, mis áreas de interés en la carrera son Bases de Datos y Aplicaciones con la Tecnología Internet. Al mismo tiempo estoy estudiando Contabilidad y al culminar está estudiaré Diseño Gráfico.",
        "color": "Turquesa",
        "libro": ["La máquina del tiempo"],
        "musica": ["Electrónica"],
        "video_juego":["DOOM"],
        "lenguajes":["Java","C++","Python"],
        "email":"jhonw.109@gmail.com",
        "ci":"19558625",
        "genero":"masculino",
        "fecha_nacimiento":"29/09/1991"
    },

    {
        "nombre":"Yesenia del Carmen Gil Casique",
        "descripcion": "Soy estudiante de la Facultad de Ciencias,trabaje hasta hace poco, en el area de BPM y BI, y actualmente me dedico a trabajar freelacer en la desarrollo de pagina web y community manager",
         "color": "rosado",
         "libro" : ["Actualmente leo la biblia"],
         "musica" : ["balada"],
         "video_juego": ["no tengo"],
         "lenguajes":["c++","java","python"],
         "email":"yesenia@gmail.com",
         "ci": "9932730",
         "genero":"femenino", 
         "fecha_nacimiento":"13/09/1990"
     },

    {	
        "nombre":"Angel Acosta",
        "descripcion":"Soy estudiante de Licenciatura en Computación en la Universidad Central de Venezuela. Vivo en San Antonio de los Altos. Soy preparador de Matemáticas Discretas I.",
        "color": "Azul",
        "libro": ["El Nombre del Viento"],
        "musica": ["Jazz"],
        "video_juego": ["Super Smash Bros."],
        "lenguajes": ["Java", "C", "C++", "Python"],
        "email":"angelxob@hotmail.com",
        "ci": "20117857",
        "genero":"masculino",
        "fecha_nacimiento":"28/05/1991"
    },

    {
        "nombre": "Jhonatan Jesús Homsany Zuzgoun",
        "descripcion": "Soy un estudiante de licenciatura en Ciencias de la Computación en la Facultad de Ciencias de la Universidad Central de Venezuela. Desde el 2023 me encuentro apoyando en soluciones educativas a nivel universitario y comencé a desarrollar un sitio web para el monitoreo centralizado de producción de plantas solares. He hecho numerosos cursos que me han permitido desarrollar habilidades fuera de lo adquirido por la universidad, como el manejo de herramientas gráficas, idiomas, entre otros.",
        "color": "Azul", 
        "libro": "El último deseo - Andrzej Sapkowski", 
        "musica": "Rock", 
        "video_juego": "The Legend Of Zelda, Red Dead Redemption, Metal Gear Solid, Super Mario Bros",
        "lenguajes": "C++, C#, Java, Python, HTML, CSS, JavaScript, Haskell, Prolog", 
        "email": "jhonatanhomsanyucv@gmail.com",
        "ci": "30182893", 
        "genero": "Masculino",
        "fecha_nacimiento": "07/08/2003"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const ci = params.get("ci");
    idioma = params.get("lang") || "es";

    const perfil = perfiles.find(p => p.ci === ci);

    const formatos = ["jpg", "jpeg", "png"];
    let img = document.createElement("img");
    img.setAttribute("id", "ImagenPerfil");
    img.alt = "Foto de perfil";
    img.width = 300;
    img.height = 306;

    let index = 0;

    function intentarCargarImagen() {
        if (index < formatos.length) {
            img.src = `${perfil.ci}/${perfil.ci}.${formatos[index]}`;
            img.onerror = () => {
                index++;
                intentarCargarImagen();
            };
        }
    }

    intentarCargarImagen();

    let body = document.getElementById("Perfil");
    body.appendChild(img);

    let div = document.createElement("div");
    div.setAttribute("class", "UserInfo");

    let h2 = document.createElement("h2");
    h2.setAttribute("class", "Nombre");
    h2.innerText = perfil.nombre;

    let p = document.createElement("p");
    p.setAttribute("id", "Descripcion");
    p.innerText = perfil.descripcion;

    let table = document.createElement("table");
    let colorTr = document.createElement("tr");
    let colorTd1 = document.createElement("td");
    colorTd1.innerText = "Mi color favorito es:";
    let colorTd2 = document.createElement("td");
    colorTd2.innerText = perfil.color

    colorTr.appendChild(colorTd1);
    colorTr.appendChild(colorTd2);
    table.appendChild(colorTr);
    
    let librotr = document.createElement("tr");
    let libroTd1 = document.createElement("td");
    libroTd1.innerText = "Mi libro favorito es:";
    let libroTd2 = document.createElement("td");
    libroTd2.innerText = perfil.libro;

    librotr.appendChild(libroTd1);
    librotr.appendChild(libroTd2);
    table.appendChild(librotr);

    let musicaTr = document.createElement("tr");
    let musicaTd1 = document.createElement("td");
    musicaTd1.innerText = "Mi estilo de música preferido es:";
    let musicaTd2 = document.createElement("td");
    musicaTd2.innerText = perfil.musica;

    musicaTr.appendChild(musicaTd1);
    musicaTr.appendChild(musicaTd2);
    table.appendChild(musicaTr);

    let videojuegoTr = document.createElement("tr");
    let videojuegoTd1 = document.createElement("td");
    videojuegoTd1.innerText = "Mis videojuegos favoritos son:";
    let videojuegoTd2 = document.createElement("td");
    videojuegoTd2.innerText = perfil.video_juego;

    videojuegoTr.appendChild(videojuegoTd1);
    videojuegoTr.appendChild(videojuegoTd2);
    table.appendChild(videojuegoTr);

    let lenguajesTr = document.createElement("tr");
    lenguajesTr.setAttribute("id", "Lenguajes");
    let lenguajesTd1 = document.createElement("td");
    lenguajesTd1.innerText = "Lenguajes aprendidos:";
    let lenguajesTd2 = document.createElement("td");
    lenguajesTd2.innerText = perfil.lenguajes;

    lenguajesTr.appendChild(lenguajesTd1);
    lenguajesTr.appendChild(lenguajesTd2);
    table.appendChild(lenguajesTr);

    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(table);

    let contacto = document.createElement("p");
    contacto.innerText = "Si necesitan comunicarse conmigo, me pueden escribir a: ";
    let contactoLink = document.createElement("a");
    contactoLink.href = "mailto:" + perfil.email;
    contactoLink.innerText = perfil.email;
    contacto.appendChild(contactoLink);

    div.appendChild(contacto);

    body.appendChild(div);


});