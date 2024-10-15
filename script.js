const shelters = {
    'Videira': [
        { name: 'Abrigo Wardiere', people: 
        [
            { name: 'João Silva', img: 'img/1.png' }, 
            { name: 'Maria Souza', img: 'img/2.png' }, 
            { name: 'Luiz Marques', img: 'img/3.png' },
            { name: 'Ana Laura Matos', img: 'img/4.png' },
            { name: 'Paulo Coelho', img: 'img/5.png' },
            { name: 'Anita Garibaldi', img: 'img/6.png' },
            { name: 'Matias Santos', img: 'img/7.png' },
            { name: 'Maria Eduarda Dias', img: 'img/8.png' },
        ] },
        { name: 'Abrigo Norte', people: 
        [
            { name: 'Ana Costa', img: 'img/16.png' },
            { name: 'Eduardo Brito', img: 'img/15.png' },
            { name: 'Julia Almeida', img: 'img/14.png' },
            { name: 'Marcelo Azevedo', img: 'img/13.png' },
            { name: 'Lara Campos', img: 'img/12.png' },
            { name: 'Arthur Serra', img: 'img/11.png' },
            { name: 'Clara Seco', img: 'img/10.png' },
            { name: 'Gustavo Queiroz', img: 'img/9.png' },
        ] },
        { name: 'Abrigo Sul', people: 
        [
            { name: 'Fernanda Mendes', img: 'img/24.png' },
            { name: 'Rafael Macedo', img: 'img/23.png' },
            { name: 'Sophia Valle', img: 'img/22.png' },
            { name: 'Gabriel Fontes', img: 'img/21.png' },
            { name: 'Eliza Machado', img: 'img/20.png' },
            { name: 'Pedro Henrique Braga', img: 'img/19.png' },
            { name: 'Sara Castro', img: 'img/18.png' },
            { name: 'Carlos Almeida', img: 'img/17.png' },
        ] }
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
function showLocation() {
    const shelterName = document.getElementById('shelter-name').innerText;
    const locationUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shelterName)}`;
    window.open(locationUrl, '_blank');
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
function contactShelter() {
    const shelterName = document.getElementById('shelter-name').innerText;
    alert(`Você está entrando em contato com o abrigo: ${shelterName}`);
}  
function showShelters() {
    const city = document.getElementById('city-select').value;
    const sheltersList = document.getElementById('shelters');
    const mapContainer = document.querySelector('.map-container'); // Mapa

    sheltersList.innerHTML = ''; 

    if (city && shelters[city]) {
        shelters[city].forEach((shelter, index) => {
            const div = document.createElement('div');
            div.className = 'shelter-item';
            div.innerText = shelter.name;
            div.onclick = () => openShelter(city, index);
            sheltersList.appendChild(div);
        });

        mapContainer.style.display = 'block';
    } else {
       
        mapContainer.style.display = 'none';
    }
}
function submitForm(event) {
    event.preventDefault(); 

    document.getElementById('confirmation-message').style.display = 'block';

    document.getElementById('volunteer-form').style.display = 'none';
}
function submitForm(event) {
    event.preventDefault(); 

    document.getElementById('volunteer-form-container').classList.add('sent');

    document.getElementById('confirmation-message').style.display = 'block';
}
function submitDonationForm(event) {
    event.preventDefault(); 

    document.getElementById('donation-form').style.display = 'none';

    document.getElementById('pix-confirmation').style.display = 'block';

    startTimer(10 * 60, document.getElementById('timer')); 

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Você tem " + minutes + ":" + seconds + " para realizar o pagamento.";

        if (--timer < 0) {
            clearInterval(interval);
            display.textContent = "O tempo para pagamento expirou. Por favor, tente novamente.";
        }
    }, 1000);
}

}
function copyPaymentCode() {
    const paymentCode = document.getElementById('payment-code').innerText;
    
    navigator.clipboard.writeText(paymentCode).then(function() {
        const copyBtn = document.getElementById('copy-btn');
        copyBtn.innerText = 'Copiado!';
        copyBtn.style.backgroundColor = '#28a745'; 
        
        setTimeout(function() {
            copyBtn.innerText = 'Copiar Código de Pagamento';
            copyBtn.style.backgroundColor = ''; 
        }, 3000);
    }, function(err) {
        alert('Falha ao copiar o código: ', err);
    });
}

