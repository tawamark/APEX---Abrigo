const shelters = {
    'Videira': [
        { name: 'Abrigo Wardiere', people: [{ name: 'João Silva', img: 'img/person1.png' }, { name: 'Maria Souza', img: 'img/person2.png' }] },
        { name: 'Abrigo Norte', people: [{ name: 'Carlos Santos', img: 'img/person3.png' }, { name: 'Ana Costa', img: 'img/person4.png' }] },
        { name: 'Abrigo Sul', people: [{ name: 'Lucas Lima', img: 'img/person5.png' }, { name: 'Fernanda Mendes', img: 'img/person6.png' }] }
    ]
};

function showShelters() {
    const city = document.getElementById('city-select').value;
    const sheltersList = document.getElementById('shelters');
    
    sheltersList.innerHTML = ''; 

    if (city && shelters[city]) {
        shelters[city].forEach((shelter, index) => {
            const div = document.createElement('div');
            div.className = 'shelter-item';
            div.innerText = shelter.name;
            div.onclick = () => openShelter(city, index);
            sheltersList.appendChild(div);
        });
    }
}

function openShelter(city, shelterIndex) {
    const shelter = shelters[city][shelterIndex];
    document.getElementById('shelter-name').innerText = shelter.name;

    const peopleList = document.getElementById('people-list');
    peopleList.innerHTML = '';

    shelter.people.forEach(person => {
        const personCard = document.createElement('div');
        personCard.className = 'person-card';

        const img = document.createElement('img');
        img.src = person.img;
        personCard.appendChild(img);

        const name = document.createElement('h3');
        name.innerText = person.name;
        personCard.appendChild(name);

        peopleList.appendChild(personCard);
    });

    document.getElementById('main-page').style.display = 'none';
    document.getElementById('shelter-page').style.display = 'block';

    const logoPath = `img/abrigo${shelterIndex + 1}.png`;
    document.getElementById('shelter-logo').src = logoPath;
}

function goBack() {
    document.getElementById('main-page').style.display = 'block';
    document.getElementById('shelter-page').style.display = 'none';
}
function toggleNightMode() {
    document.body.classList.toggle('night-mode');
}
