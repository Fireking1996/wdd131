// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu toggle
  const hamButton = document.querySelector('#menu');
  const navigation = document.querySelector('.navigation');
  const nameHeader = document.querySelector('.nameHeader');

  hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    nameHeader.classList.toggle('hidden');
  });

  // Temples data
  const temples = [
    {
      templeName: "Memphis Tennesse",
      location: "Barlett, Tennesse",
      dedicated: "2000, April, 23",
      area: 10890,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/memphis-tennessee/400x250/5-Memphis-Temple-2229686.jpg"
    },
    {
      templeName: "Salt Lake Utah",
      location: "Salt Lake City, Utah",
      dedicated: "1893, April, 6",
      area: 253000,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x640/slctemple12.jpg"
    },
    {
      templeName: "Bountiful Utah",
      location: " Bountiful, Utah",
      dedicated: "1995, January, 14",
      area: 104000,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-temple-766350-wallpaper.jpg"
    },
    {
      templeName: "Rexburg Idaho",
      location: "Rexburg, Idaho",
      dedicated: "2008, February, 10",
      area: 57504,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rexburg-idaho/400x250/rexburg-temple-775365-wallpaper.jpg"
    },
    {
      templeName: "Jordan River",
      location: "South Jordan, Utah",
      dedicated: "1981, November, 16",
      area: 148236,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/jordan-river-utah/400x250/CWD_070ac208-d163-4faa-8123-c583b099c319.jpg"
    },
    {
      templeName: "Chicago Illinois",
      location: "Glenview, Illinois",
      dedicated: "1985, August, 9",
      area: 37062,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/chicago-illinois/400x250/Chicago-Temple_2078.jpg"
    },
    {
      templeName: "Dallas Texas",
      location: "Dallas, Texas",
      dedicated: "1984, October, 19",
      area: 44207,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/dallas-texas/2018/400x250/Dallas-Texas-Temple06.jpg"
    },
    {
      templeName: "San Diego California",
      location: "San Diego, California",
      dedicated: "1993, April, 25-30",
      area: 72000,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-california-mormon-temple-769426-wallpaper.jpg"
    },
    {
      templeName: "Nukuʻalofa Tonga",
      location: "Nukuʻalofa Tonga",
      dedicated: "1983, August, 9-11",
      area: 21184,
      imageUrl:
        "http://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nukualofa-tonga/400x400/nukualofa-tonga-temple-lds-158875-wallpaper.jpg"
    },
    {
      templeName: "Lima Peru",
      location: "Lima, Peru",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Buenos Aires Argentina",
      location: "Buenos Aires, Argentina",
      dedicated: "1986, January, 17",
      area: 28299,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos-aires-argentina-temple-lds-236979-wallpaper.jpg"
    },
    {
      templeName: "Guayaquil Ecuador",
      location: "Guayaquil, Ecuador",
      dedicated: "1999, August, 1",
      area: 70884,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guayaquil-ecuador/400x250/guayaquil-ecuador-temple-lds-884500-wallpaper.jpg"
    },
  ];

  // Container and nav elements
  const container = document.querySelector('.container.home');
  const navLinks = document.querySelectorAll('.navigation a');
  const titleName = document.querySelector('h2.title'); // Fixed selector here

  // Function to display temples
  const displayTemples = (templesToShow) => {
    container.innerHTML = ''; // Clear existing cards
    templesToShow.forEach(temple => {
      const card = document.createElement('div');
      card.className = 'temple-card';
      card.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" />
        <div class="temple-info">
          <h2>${temple.templeName}</h2>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        </div>
      `;
      container.appendChild(card);
    });
  };

  // Filtering function
  const filterTemples = (criteria) => {
    let filteredTemples = [];
    switch (criteria) {
      case 'old':
        filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
        titleName.textContent = 'Old Temples';
        break;
      case 'new':
        filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
        titleName.textContent = 'New Temples';
        break;
      case 'large':
        filteredTemples = temples.filter(t => t.area > 90000);
        titleName.textContent = 'Large Temples';
        break;
      case 'small':
        filteredTemples = temples.filter(t => t.area < 10000);
        titleName.textContent = 'Small Temples';
        break;
      case 'all':
      default:
        filteredTemples = temples;
        titleName.textContent = 'All Temples';
        break;
    }
    displayTemples(filteredTemples);
  };

  // Add click event listeners for filtering
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach(nav => nav.classList.remove('active'));
      e.target.classList.add('active');

      filterTemples(e.target.id);

      // Close nav menu on mobile after selection
      navigation.classList.remove('open');
      hamButton.classList.remove('open');
      nameHeader.classList.remove('hidden');
    });
  });

  // Initial display all temples
  filterTemples('all');

  // Footer information
  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;
  const copyrightYearElement = document.getElementById('currentyear');
  const lastModifiedElement = document.getElementById('lastModified');
  copyrightYearElement.textContent = currentYear;
  lastModifiedElement.textContent = `Last update: ${lastModified}`;
});
