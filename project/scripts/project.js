// scripts/project.js

const dragons = {
  chinese: {
    name: "Chinese Lung",
    origin: "China",
    description:
      "The Chinese Lung is a serpentine, wise, and benevolent creature often associated with water, rain, and imperial power.",
    abilities: ["Weather control", "Flight (without wings)", "Longevity"],
    image: "images/chinese-dragon.jpeg",
  },
  wyvern: {
    name: "European Wyvern",
    origin: "Europe",
    description:
      "The European Wyvern is a fierce, dragon-like creature with two legs and two wings, known for its strength and fire-breathing.",
    abilities: ["Fire breathing", "Flight", "Combat prowess"],
    image: "images/wyvern.jpeg",
  },
  ryu: {
    name: "Japanese Ryū",
    origin: "Japan",
    description:
      "The Ryū is a Japanese dragon similar to the Chinese Lung, known for wisdom, oceanic power, and spiritual importance.",
    abilities: ["Ocean control", "Spiritual guidance", "Flight (without wings)"],
    image: "images/ryu.jpeg",
  },
  quetzalcoatl: {
    name: "Aztec Quetzalcoatl",
    origin: "Mesoamerica",
    description:
      "Quetzalcoatl is the feathered serpent god of the Aztecs, representing wind, learning, and fertility.",
    abilities: ["Flight", "Wisdom", "Creation myths"],
    image: "images/quetzalcoatl.jpeg",
  },
};

function loadDragonInfo(dragonKey, containerId) {
  const container = document.getElementById(containerId);

  if (!dragons[dragonKey]) {
    container.innerHTML = "<p>Please select a dragon.</p>";
    return;
  }

  const dragon = dragons[dragonKey];

  container.innerHTML = `
    <h3>${dragon.name}</h3>
    <img src="${dragon.image}" alt="${dragon.name}" loading="lazy" style="max-width: 100%; height: auto; border-radius: 10px;">
    <p><strong>Origin:</strong> ${dragon.origin}</p>
    <p>${dragon.description}</p>
    <p><strong>Abilities:</strong> ${dragon.abilities.join(", ")}</p>
  `;
}

// Save selected dragons to localStorage
function saveSelection() {
  const dragon1 = document.getElementById("dragon1").value;
  const dragon2 = document.getElementById("dragon2").value;
  localStorage.setItem("dragon1", dragon1);
  localStorage.setItem("dragon2", dragon2);
}

// Load selections from localStorage
function loadSelection() {
  const saved1 = localStorage.getItem("dragon1");
  const saved2 = localStorage.getItem("dragon2");

  if (saved1) document.getElementById("dragon1").value = saved1;
  if (saved2) document.getElementById("dragon2").value = saved2;

  if (saved1) loadDragonInfo(saved1, "info1");
  if (saved2) loadDragonInfo(saved2, "info2");
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Load previous selection on page load
  loadSelection();

  // Add change listeners
  document.getElementById("dragon1").addEventListener("change", () => {
    const value = document.getElementById("dragon1").value;
    if (value) {
      loadDragonInfo(value, "info1");
      saveSelection();
    }
  });

  document.getElementById("dragon2").addEventListener("change", () => {
    const value = document.getElementById("dragon2").value;
    if (value) {
      loadDragonInfo(value, "info2");
      saveSelection();
    }
  });
});
const dragonData = [
      { name: "Lung (Long)", origin: "China", description: "Benevolent sky serpent tied to rain, water, and imperial authority.", image: "images/chinese-dragon.jpeg" },
      { name: "Jiaolong", origin: "China", description: "Proto-dragon or river dragon spirit, often aquatic and elusive.", image: "images/jiaolong.jpeg" },
      { name: "Ryū", origin: "Japan", description: "Sea dragon often appearing as a guardian deity of rainfall and seas.", image: "images/ryu.jpeg" },
      { name: "Yamata no Orochi", origin: "Japan", description: "Eight-headed, eight-tailed serpent defeated by the storm god Susanoo.", image: "images/yamata.jpeg" },
      { name: "Imugi", origin: "Korea", description: "Serpent-like creatures aspiring to become full dragons through virtue or trial.", image: "images/imugi.jpeg" },
      { name: "Yong", origin: "Korea", description: "Wise, wingless dragons associated with water, rain, and protection.", image: "images/yong.jpeg" },
      { name: "Wyvern", origin: "Europe", description: "Two-legged dragon with wings, often seen on heraldry and known for strength and poison.", image: "images/wyvern.jpeg" },
      { name: "Fafnir", origin: "Norway (Norse Mythology)", description: "Once a dwarf, turned into a dragon due to greed; slain by the hero Sigurd.", image: "images/fafnir.jpeg" },
      { name: "Zmey Gorynych", origin: "Russia (Slavic Mythology)", description: "Multi-headed fire-breathing dragon known for terrorizing towns and battling heroes.", image: "images/zmey.jpeg" },
      { name: "Vritra", origin: "India", description: "Serpent-dragon of drought and chaos, slain by the god Indra to release the rivers.", image: "images/vritra.jpeg" },
      { name: "Naga", origin: "India / Southeast Asia", description: "Semi-divine serpent beings, sometimes benevolent, sometimes threatening.", image: "images/naga.jpeg" },
      { name: "Quetzalcoatl", origin: "Mesoamerica (Aztec)", description: "Feathered serpent deity of wind, knowledge, and creation.", image: "images/quetzalcoatl.jpeg" },
      { name: "Ladon", origin: "Greece", description: "Multi-headed dragon guarding the golden apples in the Garden of the Hesperides.", image: "images/ladon.jpeg" },
      { name: "Python", origin: "Greece", description: "Earth dragon killed by Apollo at Delphi to establish his oracle.", image: "images/python.jpeg" },
      { name: "Tiamat", origin: "Babylon", description: "Primordial sea dragon embodying chaos, mother of monsters in Mesopotamian mythology.", image: "images/tiamat.jpeg" },
      { name: "Aido-Hwedo", origin: "Dahomey (West Africa)", description: "Rainbow serpent who carries the world on its back in African mythology.", image: "images/aido-hwedo.jpeg" }
    ];

    const listContainer = document.getElementById("dragonList");
    dragonData.forEach(dragon => {
      const article = document.createElement("article");
      article.innerHTML = `
        <h2>${dragon.name}</h2>
        <h3>${dragon.origin}</h3>
        <img src="${dragon.image}" alt="${dragon.name}" loading="lazy" style="max-width: 100%; border-radius: 8px; margin: 0.5rem 0;" />
        <p>${dragon.description}</p>
      `;
      listContainer.appendChild(article);
    });