const dragons = {
  chinese: {
    name: "Chinese Lung",
    origin: "China",
    description: "A benevolent water dragon associated with rain and imperial power.",
    abilities: "Weather control, wisdom, strength",
    image: "images/chinese-dragon.jpg",
  },
  wyvern: {
    name: "European Wyvern",
    origin: "Europe",
    description:
      "A fierce dragon with two legs and wings, often symbolizing war and protection.",
    abilities: "Flight, venomous tail, fire breath",
    image: "images/wyvern.jpg",
  },
  ryu: {
    name: "Japanese Ryū",
    origin: "Japan",
    description:
      "A serpentine dragon often associated with water and rainfall, protector of the seas.",
    abilities: "Water manipulation, flight, longevity",
    image: "images/ryu.jpg",
  },
  quetzalcoatl: {
    name: "Aztec Quetzalcoatl",
    origin: "Mesoamerica",
    description:
      "The Feathered Serpent god, creator deity, symbolizing wind and knowledge.",
    abilities: "Flight, wind control, creation",
    image: "images/quetzalcoatl.jpg",
  },
};

function updateDragonInfo(selectId, infoId) {
  const select = document.getElementById(selectId);
  const infoDiv = document.getElementById(infoId);
  const dragonKey = select.value;

  if (!dragonKey) {
    infoDiv.innerHTML = `<h3>${infoDiv.querySelector('h3').textContent}</h3><p>Select a dragon to see details</p>`;
    return;
  }

  const dragon = dragons[dragonKey];
  infoDiv.innerHTML = `
    <h3>${dragon.name}</h3>
    <img src="${dragon.image}" alt="${dragon.name}" style="max-width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
    <p><strong>Origin:</strong> ${dragon.origin}</p>
    <p><strong>Description:</strong> ${dragon.description}</p>
    <p><strong>Abilities:</strong> ${dragon.abilities}</p>
  `;
}

document.getElementById("dragon1").addEventListener("change", () =>
  updateDragonInfo("dragon1", "info1")
);
document.getElementById("dragon2").addEventListener("change", () =>
  updateDragonInfo("dragon2", "info2")
);
