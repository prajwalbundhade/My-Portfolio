const dynamicText = document.getElementById('dynamic-text');
const textArray = ['Freelancer', 'Full Stack Developer'];
let currentIndex = 0;
let currentCharacter = 0;

// Function to start typing animation
function typeText() {
    if (currentCharacter < textArray[currentIndex].length) {
        dynamicText.textContent += textArray[currentIndex].charAt(currentCharacter);
        currentCharacter++;
        setTimeout(typeText, 100); // Speed of typing (milliseconds)
    } else {
        setTimeout(eraseText, 1000); // Wait for 1 sec
    }
}

// Function to start erasing text
function eraseText() {
    if (currentCharacter >= 0) {
        dynamicText.textContent = "I'm a " + textArray[currentIndex].substring(0, currentCharacter);
        currentCharacter--;
        setTimeout(eraseText, 50); // Speed of erasing (milliseconds)
    } else {
        currentIndex = (currentIndex + 1) % textArray.length;
        currentCharacter = 0;
        setTimeout(typeText, 500); // Wait for 0.5 sec before typing next text
    }
}

// Start the typing animation
typeText();

//js for dynamic about section-->

    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname) {
        for (tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    //js for dynamic about section end-->

    // js for side menu
    var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right ="0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
    }

    // Smooth scroll to top when the button is clicked
    document.getElementById("back-to-top-btn").addEventListener("click", function() {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    });

    // Show/hide the button based on the user's scroll position
    window.addEventListener("scroll", function() {
        const backToTopBtn = document.getElementById("back-to-top-btn");
        if (window.scrollY > 100) { // 100 in px
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });