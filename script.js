window.onload = () => {

    //applying the active style to the selected item and removing it from the others
    const navElements = document.querySelectorAll('[href^="#"]')

    navElements.forEach(element => {
        element.addEventListener("click", () => {
            removeActive()
            element.classList.toggle("active")
        })
    })

/*Remove active class from clicked or scrolled button */
    function removeActive() {
        navElements.forEach(element => {
            if (element.classList.contains("active")) {
                element.classList.remove("active")
            }
        })
    }

    //Scroll into about section after the arrow is clicked
    const arrowImg = document.getElementById("arrow-img")
    const aboutSection = document.getElementById("about-section")

    arrowImg.addEventListener("click", () => {
        aboutSection.scrollIntoView()
        removeActive()
        navElements[1].classList.toggle("active")
    })

    const homeSectionNav = document.getElementById("home-section-nav")
    const aboutSectionNav = document.getElementById("about-section-nav")
    const projectSectionNav = document.getElementById("project-section-nav")
    const contactSectionNav = document.getElementById("contact-section-nav")

    const aboutTitleWrapper = document.getElementById("about-title-wrapper")
    const homeTitleWrapper = document.getElementById("home-title-wrapper")
    const projectTitleWrapper = document.getElementById("project-title-wrapper")
    const contactImgWrapper = document.getElementById("contact-img-wrapper")
    window.addEventListener("scroll", () => {

        if (isInViewport(homeTitleWrapper)) {
            removeActive()
            homeSectionNav.classList.toggle("active")
        }

        if (isInViewport(aboutTitleWrapper)) {
            removeActive()
            aboutSectionNav.classList.toggle("active")
        }

        if (isInViewport(projectTitleWrapper)) {
            removeActive()
            projectSectionNav.classList.toggle("active")
        }

        if (isInViewport(contactImgWrapper)) {
            removeActive()
            contactSectionNav.classList.toggle("active")
        }
    })






    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

/*Create hamburger menu using css styles */
    const hamburgerMenu = document.getElementById("hamburger-menu")
    const firstChild = document.getElementById("first-child")
    const secondChild = document.getElementById("second-child")
    const thirdChild = document.getElementById("third-child")

    hamburgerMenu.addEventListener("click", () => {
        firstChild.classList.toggle("first-child")
        secondChild.classList.toggle("second-child")
        thirdChild.classList.toggle("third-child")
    })

    const navigation = document.getElementById("navigation")
    hamburgerMenu.addEventListener("click", () => {
        navigation.classList.toggle("navigation-visible")

    }) 

    navigation.addEventListener("click", ()=> {
        navigation.classList.remove("navigation-visible")
        firstChild.classList.toggle("first-child")
        secondChild.classList.toggle("second-child")
        thirdChild.classList.toggle("third-child")
    })

    /*Night mode*/


   
    const nightModeSwitch = document.getElementById("night-mode-switch")
    nightModeSwitch.addEventListener("click", ()=> {



    
    
        nightModeSwitch.classList.toggle("clicked")
        nightModeSwitch.classList.toggle("not-clicked")

        const starsBackground = document.getElementById("stars-background")
        const homeSection = document.getElementById("home-section")
        const moonImg = document.createElement("img")
        const footer = document.getElementById("footer-div")
        const footerSign = document.getElementById("sign")
        const summary = document.getElementById("summary")
        const navigation = document.getElementById("navigation")

        moonImg.setAttribute("src", "/night-theme-img/moonImg.png")
        moonImg.setAttribute("class", "moon-img")
        moonImg.setAttribute("id", "moon-img")
        
        /*Activate night mode after click to the moon */
        if(nightModeSwitch.classList.contains("clicked")) {
            footer.classList.toggle("night-mode")
            footerSign.classList.toggle("night-mode")
            summary.classList.toggle("night-mode")
            starsBackground.classList.toggle("active")
            navigation.classList.toggle("navigation-night-mode")

            homeSection.appendChild(moonImg)

            document.body.classList.toggle('body-night-mode')
            document.getElementById("night-mode-switch").src = "/night-theme-img/sun.png"
            document.getElementById("coding-img").src = "/night-theme-img/custom-coding.png"
            document.getElementById("arrow-img").src = "/night-theme-img/down-arrow.png"
            document.getElementById("github-img").src = "/night-theme-img/github.png"
            document.getElementById("email-img").src = "/night-theme-img/email.png"
            document.getElementById("linkedin-img").src = "/night-theme-img/linkedin.png"

            /* movement of the moon across the sky */
            window.addEventListener("scroll", ()=> {
                
                let value =  window.scrollY
                moonImg.style.right = 30 + value - 0.5 + 'px'
                moonImg.style.top = 200 - value * 0.5 + 'px'
   

            })
            
            
  
        /*Back to the light mode after click the sun button */
        } else if(nightModeSwitch.classList.contains("not-clicked")) {
            footer.classList.toggle("night-mode")
            footerSign.classList.toggle("night-mode")
            summary.classList.toggle("night-mode")
            navigation.classList.toggle("navigation-night-mode")
            starsBackground.classList.toggle("active")
            document.body.classList.toggle('body-night-mode')
            

            document.getElementById("night-mode-switch").src = "/img/moon.png"
            document.getElementById("coding-img").src = "/img/custom-coding.png"
            document.getElementById("arrow-img").src = "/img/down-arrow.png"
            document.getElementById("github-img").src = "/img/github.png"
            document.getElementById("email-img").src = "/img/email.png"
            document.getElementById("linkedin-img").src = "/img/linkedin.png"
            
            const moonImg = document.getElementById("moon-img")
            moonImg.remove()


            
            
        }


    })


}
