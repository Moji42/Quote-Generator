const containerElement = document.querySelector(".container");

const careers = ["So many books, so little time. - Frank Zappa", "A  room without books is like a body without a soul. -Marcus Tullius Cicero", "You only live once, but if you do it right, once is enough. - Mae West", "Be the change that you wish to see in the world. -Mahatma Gandhi"];
let careerIndex = 0;
let charIndex = 0;

function updateText() {
    containerElement.innerHTML = "<h1>" + careers[careerIndex].slice(0, charIndex) + "</h1>";

    charIndex++;

    if (charIndex > careers[careerIndex].length) {
        charIndex = 0;
        careerIndex++;
        if (careerIndex >= careers.length) {
            careerIndex = 0;
        }
    }

    setTimeout(updateText,100);
}

updateText();
