const butterflies = [
    {
        name: "Monarch Butterfly",
        scientific: "Danaus plexippus",
        family: "Nymphalidae",
        image: "images/monarch.jpg",
        habitat: "North and South America",
        wingspan: "8.9–10.2 cm",
        diet: "Nectar",
        description:
            "The monarch butterfly is one of the most recognizable butterflies in the world. It is famous for its spectacular long-distance migration.",
        fact:
            "Some monarchs migrate thousands of kilometers between summer and winter habitats."
    },

    {
        name: "Peacock Butterfly",
        scientific: "Aglais io",
        family: "Nymphalidae",
        image: "images/peacock.jpg",
        habitat: "Europe and temperate Asia",
        wingspan: "5.0–5.5 cm",
        diet: "Nectar",
        description:
            "The peacock butterfly is known for the large eye-like patterns on its wings. These markings can help scare away predators.",
        fact:
            "The eyespots on its wings resemble the eyes of a much larger animal."
    },

    {
        name: "Swallowtail",
        scientific: "Papilio machaon",
        family: "Papilionidae",
        image: "images/swallowtail.jpg",
        habitat: "Europe, Asia and North America",
        wingspan: "6.5–8.6 cm",
        diet: "Nectar",
        description:
            "The swallowtail is a large and colorful butterfly with distinctive tail-like extensions on its hind wings.",
        fact:
            "Its caterpillar can produce a strong-smelling substance to discourage predators."
    }
];


const grid = document.getElementById("butterflyGrid");
const count = document.getElementById("count");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalScientific = document.getElementById("modalScientific");
const modalFamily = document.getElementById("modalFamily");
const modalHabitat = document.getElementById("modalHabitat");
const modalWingspan = document.getElementById("modalWingspan");
const modalDiet = document.getElementById("modalDiet");
const modalDescription = document.getElementById("modalDescription");
const modalFact = document.getElementById("modalFact");


/* =========================
   DISPLAY BUTTERFLIES
========================= */

function displayButterflies(list) {

    grid.innerHTML = "";

    count.textContent = list.length;

    if (list.length === 0) {
        noResults.style.display = "block";
        return;
    }

    noResults.style.display = "none";

    list.forEach((butterfly, index) => {

        const card = document.createElement("article");

        card.className = "card";

        card.innerHTML = `
            <div class="card-image">
                <img
                    src="${butterfly.image}"
                    alt="${butterfly.name}"
                    loading="lazy"
                >
            </div>

            <div class="card-info">
                <p class="card-family">
                    ${butterfly.family}
                </p>

                <h3 class="card-title">
                    ${butterfly.name}
                </h3>

                <p class="card-scientific">
                    ${butterfly.scientific}
                </p>
            </div>
        `;

        card.addEventListener("click", () => {
            openModal(butterfly);
        });

        grid.appendChild(card);
    });
}


/* =========================
   SEARCH
========================= */

searchInput.addEventListener("input", () => {

    const search = searchInput.value
        .toLowerCase()
        .trim();

    const filtered = butterflies.filter(butterfly => {

        return (
            butterfly.name.toLowerCase().includes(search) ||
            butterfly.scientific.toLowerCase().includes(search) ||
            butterfly.family.toLowerCase().includes(search) ||
            butterfly.habitat.toLowerCase().includes(search)
        );

    });

    displayButterflies(filtered);
});


/* =========================
   MODAL
========================= */

function openModal(butterfly) {

    modalImage.src = butterfly.image;
    modalImage.alt = butterfly.name;

    modalName.textContent = butterfly.name;
    modalScientific.textContent = butterfly.scientific;
    modalFamily.textContent = butterfly.family;

    modalHabitat.textContent = butterfly.habitat;
    modalWingspan.textContent = butterfly.wingspan;
    modalDiet.textContent = butterfly.diet;

    modalDescription.textContent = butterfly.description;
    modalFact.textContent = butterfly.fact;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeModalFunction() {

    modal.classList.remove("active");

    document.body.style.overflow = "";
}


closeModal.addEventListener("click", closeModalFunction);

modalOverlay.addEventListener("click", closeModalFunction);


/* Close modal with Escape */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModalFunction();
    }

});


/* =========================
   INITIAL LOAD
========================= */

displayButterflies(butterflies);
