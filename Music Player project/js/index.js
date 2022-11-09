// const API_URL = 'http://localhost:3024/';

// let dataMusic = [];
const dataMusic = [
    {
        id: '1',
        artist: 'The weeknd',
        track: 'Save your tears',
        poster: 'img/Foto_1.jpg',
        mp3: 'audio/The Weeknd - Save Your Tears.mp3',
    },
    {
        id: '2',
        artist: 'Imagine Dragons',
        track: 'Follow You',
        poster: 'img/Foto_2.jpg',
        mp3: 'audio/Imagine Dragons - Follow You.mp3',
    },
    {
        id: '3',
        artist: 'Tove Lo',
        track: 'How Long',
        poster: 'img/Foto_3.jpg',
        mp3: 'audio/Tove Lo - How Long.mp3',
    },
    {
        id: '4',
        artist: 'Tom Odell',
        track: 'Another Love',
        poster: 'img/Foto_4.jpg',
        mp3: 'audio/Tom Odell - Another Love.mp3',
    },
    {
        id: '5',
        artist: 'Lana Del Rey',
        track: 'Born To Die',
        poster: 'img/Foto_5.jpg',
        mp3: 'audio/Lana Del Rey - Born To Die.mp3',
    },
    {
        id: '6',
        artist: 'Adele',
        track: 'Hello',
        poster: 'img/Foto_6.jpg',
        mp3: 'audio/Adele - Hello.mp3',
    },
    {
        id: '7',
        artist: 'Tom Odell',
        track: "Can't Pretend",
        poster: 'img/Foto_7.jpg',
        mp3: "audio/Tom Odell - Can't Pretend.mp3",
    },
    {
        id: '8',
        artist: 'Lana Del Rey',
        track: 'Young And Beautiful',
        poster: 'img/Foto_8.jpg',
        mp3: 'audio/Lana Del Rey - Young And Beautiful.mp3',
    },
    {
        id: '9',
        artist: 'Adele',
        track: 'Someone Like You',
        poster: 'img/Foto_9.jpg',
        mp3: 'audio/Adele - Someone Like You.mp3',
    },
    {
        id: '10',
        artist: 'Imagine Dragons',
        track: 'Natural',
        poster: 'img/Foto_10.jpg',
        mp3: 'audio/Imagine Dragons - Natural.mp3',
    },
    {
        id: '11',
        artist: 'Drake',
        track: 'Laugh Now Cry Later',
        poster: 'img/Foto_11.jpg',
        mp3: 'audio/Drake - Laugh Now Cry Later.mp3',
    },
    {
        id: '12',
        artist: 'Madonna',
        track: 'Frozen',
        poster: 'img/Foto_12.jpg',
        mp3: 'audio/Madonna - Frozen.mp3',
    },
    {
        id: '13',
        artist: 'Broken Parts',
        track: 'Smash Into Pieces',
        poster: 'img/Foto_13.jpg',
        mp3: 'audio/Broken Parts - Smash Into Pieces.mp3',
    },
    {
        id: '14',
        artist: 'Aviators',
        track: 'Our Little Horror Story',
        poster: 'img/Foto_14.jpg',
        mp3: 'audio/Aviators - Our Little Horror Story.mp3',
    },
    {
        id: '15',
        artist: 'Poets Of The Fal',
        track: 'My Dark Disquiet',
        poster: 'img/Foto_15.jpg',
        mp3: 'audio/Poets Of The Fall - My Dark Disquiet.mp3',
    },
    {
        id: '16',
        artist: 'Nephew',
        track: 'Focus On The Sound',
        poster: 'img/Foto_16.jpg',
        mp3: 'audio/Nephew - Focus On The Sound.mp3',
    },
    {
        id: '17',
        artist: 'A Life Divided',
        track: 'The Most Beautiful Black',
        poster: 'img/Foto_17.jpg',
        mp3: 'audio/A Life Divided - The Most Beautiful Black.mp3',
    },
    {
        id: '18',
        artist: 'Five Finger Death Punch',
        track: 'M.I.N.E (End This Way)',
        poster: 'img/Foto_18.png',
        mp3: 'audio/Five Finger Death Punch - M.I.N.E End This Way.mp3',
    },
    {
        id: '19',
        artist: 'Gustavo Bravetti',
        track: 'Babel',
        poster: 'img/Foto_19.jpg',
        mp3: 'audio/Gustavo Bravetti - Babel.mp3',
    },
    {
        id: '20',
        artist: 'Hypnogaja',
        track: 'Babel',
        poster: 'img/Foto_20.jpg',
        mp3: 'audio/Hypnogaja - Here Comes The Rain Again.mp3',
    },
];
let playlist = [];

const favoriteList = localStorage.getItem('favorite') ? JSON.parse(localStorage.getItem('favorite')) : [];


const audio = new Audio();
const headerLogo = document.querySelector('.header__logo');
const favoritBtn = document.querySelector('.header__favorit-btn');
const search = document.querySelector('.search');
const player = document.querySelector('.player');
const tracksCard = document.getElementsByClassName('track');
const catalogContainer = document.querySelector('.catalog__container');
const pauseBtn = document.querySelector('.player__controller-pause');
const stopBtn = document.querySelector('.player__controller-stop');
const prevBtn = document.querySelector('.player__controller-prev');
const nextBtn = document.querySelector('.player__controller-next');
const likeBtn = document.querySelector('.player__controller-like');
const muteBtn = document.querySelector('.player__controller-mute');
const playerProgressInput = document.querySelector('.player__progress-input');
const playerProgressInputMax = +playerProgressInput.max;

const playerTimePassed = document.querySelector('.player__time-passed');
const playerTimeDuration = document.querySelector('.player__time-total');
const playerVolumeInput = document.querySelector('.player__volume-input');

const trackTitle = document.querySelector('.track-info__title');
const trackArtist = document.querySelector('.track-info__artist');

//-------------------------------------------------------------------------
// Создаем элемент кнопка Увидеть все
const catalogAddBtn = document.createElement('button');
catalogAddBtn.classList.add('catalog__btn-add');
catalogAddBtn.innerHTML = `
                <span>Увидеть все</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z">
                </svg>
`;

//-------------------------------------------------------------------------
const pausePlayer = () => {
    const trackActive = document.querySelector('.track_active');

    if (audio.paused === true) {
        audio.play();
        pauseBtn.classList.remove('player__icon_play');
        trackActive.classList.remove('track_pause');
    } else {
        audio.pause();
        pauseBtn.classList.add('player__icon_play');
        trackActive.classList.add('track_pause');
    }
};

//-------------------------------------------------------------------------
const playMusic = (event) => {
    //preventDefault() отключение стандартного поведения браузера при нажатии на а 
    event.preventDefault();
    const trackActive = event.currentTarget;

    if (trackActive.classList.contains('track_active')) {
        pausePlayer();
        return
    }

    let i = '';
    const id = trackActive.dataset.idTrack;

    const index = favoriteList.indexOf(id);
    if (index !== -1) {
        likeBtn.classList.add('player__icon_like_active');
    } else {
        likeBtn.classList.remove('player__icon_like_active');
    }

    localStorage.setItem('favorite', JSON.stringify(favoriteList));


    const track = playlist.find((item, index) => {

        i = index;
        return id === item.id;
    });
    // console.log(track);
    trackTitle.textContent = track.track;
    trackArtist.textContent = track.artist;
    audio.src = track.mp3;

    audio.play();

    pauseBtn.classList.remove('player__icon_play');
    player.classList.add('player_active');

    const prevTrack = i === 0 ? playlist.length - 1 : i - 1;
    const nextTrack = i + 1 === playlist.length ? 0 : i + 1;
    prevBtn.dataset.idTrack = playlist[prevTrack].id;
    nextBtn.dataset.idTrack = playlist[nextTrack].id;
    likeBtn.dataset.idTrack = id;

    for (let i = 0; i < tracksCard.length; i++) {
        if (id === tracksCard[i].dataset.idTrack) {
            tracksCard[i].classList.add('track_active');
        } else {
            tracksCard[i].classList.remove('track_active');
        }
    }

}

//-------------------------------------------------------------------------
// Навешиваем событие на карточки
const addHandlerTrack = () => {
    for (let i = 0; i < tracksCard.length; i++) {
        tracksCard[i].addEventListener('click', playMusic);
    }
};

//-------------------------------------------------------------------------
pauseBtn.addEventListener('click', pausePlayer);

//-------------------------------------------------------------------------
stopBtn.addEventListener('click', () => {
    audio.src = '';
    player.classList.remove('player_active');

    document.querySelector('.track__active').classList.remove('track__active');
});
//-------------------------------------------------------------------------
const createCard = (data) => {
    const card = document.createElement('a');
    card.href = '#';
    // card.className = 'catalog__item track';
    // Или задать класс можно через:
    card.classList.add('catalog__item', 'track');
    card.dataset.idTrack = data.id;


    card.innerHTML = `
                <div class="track__img-wrap">
                    <img class="track__poster" src="${data.poster}" alt="${data.artist} ${data.track}" width="180"
                    
                        height="180">
                </div>
                <div class="track__info track-info">
                    <p class="track__info__title">
                    ${data.track}
                    </p>
                    <p class="track__info__artist">
                    ${data.artist}
                    </p>
                </div>
            `;

    return card;
};

//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
const renderCatalog = (dataList) => {
    playlist = [...dataList];
    catalogContainer.textContent = '';
    const listCards = dataList.map(createCard);
    catalogContainer.append(...listCards);
    addHandlerTrack();
};
//-------------------------------------------------------------------------
const checkCount = (i = 1) => {
    tracksCard[0];
    if (catalogContainer.clientHeight > tracksCard[0].clientHeight * 3) {
        tracksCard[tracksCard.length - i].style.display = 'none';
        checkCount(i + 1);
    } else if (i !== 1) {
        catalogContainer.append(catalogAddBtn);
    }
};
//-------------------------------------------------------------------------
//Отображение времени проигрывания трэка прошло времени/время трэка всего
const updateTime = () => {
    const duration = audio.duration;
    const currentTime = audio.currentTime;
    const progress = (currentTime / duration) * playerProgressInputMax;

    playerProgressInput.value = progress ? progress : 0;

    const minutesPassed = Math.floor(currentTime / 60) || '0';
    const secondsPassed = Math.floor(currentTime % 60) || '0';

    const minutesDuration = Math.floor(duration / 60) || '0';
    const secondsDuration = Math.floor(duration % 60) || '0';

    playerTimePassed.textContent = `${minutesPassed}:${secondsPassed < 10 ? '0' + secondsPassed : secondsPassed}`;
    playerTimeDuration.textContent = `${minutesDuration}:${secondsDuration < 10 ? '0' + secondsDuration : secondsDuration}`;
};
//-------------------------------------------------------------------------



//-------------------------------------------------------------------------
const init = async () => {
    localStorage.setItem('volume', audio.volume) || 1;
    playerVolumeInput.value = audio.volume * 100;

    // dataMusic = await fetch(`${API_URL}api/music`).then((data) => data.json());

    renderCatalog(dataMusic);
    checkCount();

    catalogAddBtn.addEventListener('click', () => {
        [...tracksCard].forEach((trackCard) => {
            trackCard.style.display = '';
            catalogAddBtn.remove();
        });
    });

    prevBtn.addEventListener('click', playMusic);
    nextBtn.addEventListener('click', playMusic);

    audio.addEventListener('ended', () => {
        //Создаем свое событие клик на nextBtn
        nextBtn.dispatchEvent(new Event('click'));
    })

    audio.addEventListener('timeupdate', updateTime);

    playerProgressInput.addEventListener('change', () => {
        const progress = playerProgressInput.value;
        audio.currentTime = (progress / playerProgressInputMax) * audio.duration;
    })

    favoritBtn.addEventListener('click', () => {
        const data = dataMusic.filter((item) => favoriteList.includes(item.id));
        renderCatalog(data);
        checkCount();
    });

    headerLogo.addEventListener('click', () => {
        renderCatalog(dataMusic);
        checkCount();
    });

    likeBtn.addEventListener('click', () => {
        const index = favoriteList.indexOf(likeBtn.dataset.idTrack);
        if (index === -1) {
            favoriteList.push(likeBtn.dataset.idTrack);
            likeBtn.classList.add('player__icon_like_active');
        } else {
            favoriteList.splice(index, 1);
            likeBtn.classList.remove('player__icon_like_active');
        }
        localStorage.setItem('favorite', JSON.stringify(favoriteList));
    });

    playerVolumeInput.addEventListener('input', () => {
        const value = playerVolumeInput.value;
        audio.volume = value / 100;
    })

    muteBtn.addEventListener('click', () => {
        if (audio.volume) {
            localStorage.setItem('volume', audio.volume);
            audio.volume = 0;
            muteBtn.classList.add('player__icon_mute-on');
            playerVolumeInput.value = 0;
        } else {
            audio.volume = localStorage.getItem('volume');
            muteBtn.classList.remove('player__icon_mute-on');
            playerVolumeInput.value = audio.volume * 100;
        }
    });

    // search.addEventListener('submit', async (event) => {
    //     event.preventDefault();

    //     playlist = await fetch(`${API_URL}api/music?search=${search.search.value}`).then((data) => data.json());

    //     renderCatalog(playlist);
    //     checkCount();

    // });

};

init();


