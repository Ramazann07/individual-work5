
/* Task 6: Counter */
let count = 0;

const countDisplay = document.getElementById("count");

function updateCount() {
    countDisplay.textContent = count;
}

document.getElementById("increase").addEventListener("click", function () {
    count++;
    updateCount();
});

document.getElementById("decrease").addEventListener("click", function () {
    if (count > 0) {
        count--;
    }
    updateCount();
});

document.getElementById("reset").addEventListener("click", function () {
    count = 0;
    updateCount();
});


/* Task 7: Live Text Preview */
const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const preview = document.getElementById("preview");

textInput.addEventListener("input", function () {
    charCount.textContent = textInput.value.length;

    if (textInput.value.trim() === "") {
        preview.textContent = "Your text will appear here.";
    } else {
        preview.textContent = textInput.value;
    }
});

document.getElementById("clearText").addEventListener("click", function () {
    textInput.value = "";
    charCount.textContent = "0";
    preview.textContent = "Your text will appear here.";
    textInput.focus();
});


/* Task 8: Image Selector */
const imageSelect = document.getElementById("imageSelect");
const selectedImage = document.getElementById("selectedImage");
const imageCaption = document.getElementById("imageCaption");

const images = {
    football: {
        src: "assets/football.jpg",
        alt: "A football",
        caption: "Football"
    },
    stadium: {
        src: "assets/stadium.jpg",
        alt: "A football stadium",
        caption: "Stadium"
    },
    trophy: {
        src: "assets/trophy.jpg",
        alt: "A sports trophy",
        caption: "Trophy"
    }
};

imageSelect.addEventListener("change", function () {
    const selected = images[imageSelect.value];

    selectedImage.src = selected.src;
    selectedImage.alt = selected.alt;
    imageCaption.textContent = selected.caption;
});


/* Task 9: Keyboard Events */
const keyboardInput = document.getElementById("keyboardInput");
const keyboardResult = document.getElementById("keyboardResult");

keyboardInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        keyboardResult.textContent = keyboardInput.value;
    }

    if (event.key === "Escape") {
        keyboardInput.value = "";
        keyboardResult.textContent = "";
    }
});


/* Task 10: Mouse and Focus Events */
const focusCard = document.getElementById("focusCard");
const cardMessage = document.getElementById("cardMessage");

focusCard.addEventListener("mouseenter", function () {
    focusCard.classList.add("highlight");
    cardMessage.textContent = "Mouse is over the card!";
});

focusCard.addEventListener("mouseleave", function () {
    focusCard.classList.remove("highlight");
    cardMessage.textContent = "Move your mouse over this card or focus on it using Tab.";
});

focusCard.addEventListener("focus", function () {
    focusCard.classList.add("highlight");
    cardMessage.textContent = "The card is focused!";
});

focusCard.addEventListener("blur", function () {
    focusCard.classList.remove("highlight");
    cardMessage.textContent = "Move your mouse over this card or focus on it using Tab.";
});
