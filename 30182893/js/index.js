const perfiles = [
    {
        "ci": "30182893",
        "imagen": "30182893\/30182893.jpg",
        "nombre": "Jhonatan Homsany"
    },
    {
        "ci": "19371273",
        "imagen": "19371273\/19371273.jpg",
        "nombre": "Raquel Escalante Salazar"
    },
    {
        "ci": "18829705",
        "imagen": "18829705\/18829705.jpg",
        "nombre": "Leopoldo Enrique Izquierdo Carias"
    },
    {
        "ci": "18819509",
        "imagen": "18819509\/18819509.jpg",
        "nombre": "Darwin R. Guaimacuto N."
    },
    {
        "ci": "14444733",
        "imagen": "14444733\/14444733.jpg",
        "nombre": "Mar\u00eda Paula Herrero"
    },
    {
        "ci": "18443368",
        "imagen": "18443368\/18443368.jpg",
        "nombre": "Diego Branco"
    },
    {
        "ci": "19267152",
        "imagen": "19267152\/19267152.jpg",
        "nombre": "Zulay Pineda"
    },
    {
        "ci": "18487832",
        "imagen": "18487832\/18487832.jpg",
        "nombre": "Hector Palomino"
    },
    {
        "ci": "20117857",
        "imagen": "20117857\/20117857.PNG",
        "nombre": "Angel Acosta"
    },
    {
        "ci": "19558625",
        "imagen": "19558625\/19558625.jpg",
        "nombre": "Jhonny Morales"
    },
    {
        "ci": "19932730",
        "imagen": "19932730\/19932730.jpg",
        "nombre": "Yesenia del Carmen Gil Casique"
    },
    {
        "ci": "18009154",
        "imagen": "18009154\/18009154.JPG",
        "nombre": "Jimmy E. Espino B."
    },
    {
        "ci": "18110561",
        "imagen": "18110561\/18110561.jpg",
        "nombre": "Karl Correa"
    },
    {
        "ci": "19334139",
        "imagen": "19334139\/19334139.jpg",
        "nombre": "Adrian Montes de Oca"
    },
    {
        "ci": "13852255",
        "imagen": "13852255\/13852255.png",
        "nombre": "Betty Torres"
    },
    {
        "ci": "19499302",
        "imagen": "19499302\/19499302.jpg",
        "nombre": "Katherine Colina"
    },
    {
        "ci": "18002106",
        "imagen": "18002106\/18002106.jpg",
        "nombre": "Abelardo Jos\u00e9 Moreno Carballeda"
    },
    {
        "ci": "19379860",
        "imagen": "19379860\/19379860.jpg",
        "nombre": "Gabriel Restrepo"
    },
    {
        "ci": "18938455",
        "imagen": "18938455\/18938455.jpg",
        "nombre": "Felix Garcia"
    },
    {
        "ci": "18836874",
        "imagen": "18836874\/18836874.jpg",
        "nombre": "Jorge Gavidia"
    }
]

/*            <li>
                <section class="User">
                    <img src="CEDULAPequena.jpeg" alt="Foto de perfil" width="150" height="150">
                    <p>Jhonatan Homsany</p>
                </section>
            </li> */

document.addEventListener("DOMContentLoaded", () => {
    perfiles.forEach(perfil => {
        let li = document.createElement("li");
        let section = document.createElement("section");
        let img = document.createElement("img");
        let p = document.createElement("p");

        p.innerText = perfil.nombre;
        img.src = perfil.imagen;
        img.alt = "Foto de perfil";
        img.width = 150;
        img.height = 150;
        section.classList.add("User");
        section.appendChild(img);
        section.appendChild(p);
        li.appendChild(section);

        document.getElementsByTagName("ul")[1].appendChild(li);
    });
});
            