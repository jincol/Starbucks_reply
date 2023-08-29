document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".start a");
    const containers = document.querySelectorAll(".info_favorites");

    links.forEach((link, index) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            showContainer(index);
        });
    });

    function showContainer(index) {
        containers.forEach((container, containerIndex) => {
            if (containerIndex === index) {
                container.style.opacity = 1;
            } else {
                container.style.opacity = 0;
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var containerAbouts = document.querySelectorAll(".enlaces_externos .container_about");

    containerAbouts.forEach(function(containerAbout) {
        var title = containerAbout.querySelector("h2");
        title.addEventListener("click", function() {
            containerAbout.classList.toggle("active");

            // Cerrar otros contenedores abiertos
            containerAbouts.forEach(function(otherContainerAbout) {
                if (otherContainerAbout !== containerAbout) {
                    otherContainerAbout.classList.remove("active");
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var containerAbouts = document.querySelectorAll(".enlaces_externos .container_about");

    containerAbouts.forEach(function(containerAbout) {
        var title = containerAbout.querySelector("h2");
        var icon = title.querySelector("i");

        var isRotated = false; // Estado de rotación

        title.addEventListener("click", function() {
            if (isRotated) {
                icon.style.transform = "rotate(0deg)"; // Revertir la rotación
            } else {
                icon.style.transform = "rotate(180deg)";
            }

            isRotated = !isRotated; // Cambiar el estado de rotación
        });
    });
});

