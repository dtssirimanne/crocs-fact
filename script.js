const facts = [
    "Crocodiles have been around for over 200 million years.",
    "Crocodiles are ectothermic (cold-blooded).",
    "They have one of the strongest bite forces in the animal kingdom.",
    "Crocodiles can swim at speeds of up to 20 miles per hour.",
    "Their eyes have a special membrane for underwater vision.",
    "Crocodiles can be social and engage in group behaviors.",
    "Female crocodiles exhibit parental care.",
    "Crocodiles are carnivorous and have a varied diet.",
    "They inhabit tropical and subtropical regions.",
    "Crocodiles communicate through vocalizations."
];

let attempts = 0;

const factButton = document.getElementById('factButton');
const factDisplay = document.getElementById('factDisplay');

factButton.addEventListener('click', () => {
    if (attempts < 3) {
        attempts++;
        moveButton();
        alert("Try again!");
    } else {
        const randomIndex = Math.floor(Math.random() * facts.length);
        factDisplay.textContent = facts[randomIndex];
        attempts = 0; // Reset attempts after a successful fact display
    }
});

function moveButton() {
    const randomX = Math.random() * (window.innerWidth - factButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - factButton.offsetHeight);
    factButton.style.position = 'absolute';
    factButton.style.left = `${randomX}px`;
    factButton.style.top = `${randomY}px`;
}
