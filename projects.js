let projects = [
    {
        id: 0,
        title: "Osobní web",
        description: "Osobní web, který slouží k mé prezentaci. ",
        tech: "HTML, CSS, JAVASCRIPT",
        img: "/modal-img/home.png",
        url: "https://github.com/mgaidos/Personal-web"
    },

    {
        id: 1,
        title: "Projekt ke zkoušce",
        description: "Tato aplikace byla podmínkou pro připuštění k závěrečné zkoušce kurzu Vývoj webových aplikací v Javascriptu. Aplikace obsahuje kompletní správu (CRUD) pojištěných a jejich pojištění.",
        tech: "HTML, CSS, JAVASCRIPT",
        img: "/modal-img/insurance-app.png",
        url: "https://github.com/mgaidos/pojisteni/"
    }
]

let projectImgWrapper = document.getElementsByClassName("project-img-wrapper")
console.log(projectImgWrapper)

const modalContainer = document.getElementById("modal-container")

function showModal(project) {

    return modalContainer.innerHTML =
        `
    <div class = "modal-wrapper">
        <div class="modal-hamburger-menu-wrapper">
            <div class="modal-hamburger-menu" id="modal-hamburger-menu">
                <span id="modal-first-child"></span>
                <span id="modal-third-child"></span>
            </div>
        </div>
    

        <h1>${projects[project.id].title}</h1>
        <p>${projects[project.id].description}</p>
        <h3>Použité technologie.</h3>
        <p>${projects[project.id].tech}</p>
        <img src="${projects[project.id].img}">
        <a href="${projects[project.id].url}" target="_blank" >GitHub</a>
    </div>
    `
}

for (let project of projectImgWrapper) {
    project.addEventListener("click", () => {
        document.body.classList.toggle("modal-active")
        modalContainer.classList.add("active")
        showModal(project)
        const modalHamburgerMenu = document.getElementById("modal-hamburger-menu")
        const modalFirstChild = document.getElementById("modal-first-child")
        const modalSecondChild = document.getElementById("modal-second-child")
        const modalThirdChild = document.getElementById("modal-third-child")
        const modalWrapper = document.querySelector(".modal-wrapper")

        modalHamburgerMenu.addEventListener("click", () => {
            modalFirstChild.classList.toggle("modal-first-child")
            modalThirdChild.classList.toggle("modal-third-child")
        })
        modalHamburgerMenu.addEventListener("click", () => {
            modalContainer.classList.remove("active")
            document.body.classList.toggle("modal-active")

        })

        modalContainer.addEventListener("click", (e) => {
            if (e.target.id == "modal-container") {
                modalFirstChild.classList.toggle("modal-first-child")
                modalThirdChild.classList.toggle("modal-third-child")

                modalContainer.classList.remove("active")
                document.body.classList.remove("modal-active")
            }
        })



    })
}