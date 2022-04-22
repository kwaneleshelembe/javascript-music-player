let rodWaveTab = document.querySelector("#rod-wave");
let trippieReddTab = document.querySelector("#trippie-redd");

let rodWaveSongs = document.querySelector("#rod-wave-songs");
let trippieReddSongs = document.querySelector("#trippie-redd-songs");

let selectedTab = document.querySelector("#selected-tab");

let onRodWave = true;
let onTrippieRedd = true;


function showRodWaveSongs() {
    rodWaveSongs.style.display = "unset";
    trippieReddSongs.style.display = "none";
    selectedTab.style.animation = "selectRodWave 500ms forwards";
    onRodWave = true;
    onTrippieRedd = false;
}

function showTrippieReddSongs() {
    trippieReddSongs.style.display = "unset";
    rodWaveSongs.style.display = "none";
    selectedTab.style.animation = "selectTrippieRedd 500ms forwards";
    onTrippieRedd = true;
    onRodWave = false;
}

rodWaveTab.addEventListener("click", (e) => {
    if (onTrippieRedd) {
        showRodWaveSongs();
    }
});

trippieReddTab.addEventListener("click", (e) => {
    if (onRodWave) {
        showTrippieReddSongs();
    }
});

let rodWaveSongsArr = ["music/Rod Wave/Rod Wave -  Rags2Riches 2 ft Lil Baby (Official Music Video).mp3",
    "music/Rod Wave/Rod Wave - Cold December (Official Video)_160k.mp3",
    "music/Rod Wave/Rod Wave - Forever Set In Stone (Official Video) (1).mp3",
    "music/Rod Wave/Rod Wave - Letter From Houston (Official Music Video).mp3",
    "music/Rod Wave/Rod Wave - Richer ft. Polo G (Official Audio).mp3",
    "music/Rod Wave/Rod Wave - Street Runner (Official Video).mp3",
    "music/Rod Wave/Rod Wave - Time Heals (Official Video).mp3",
    "music/Rod Wave/Rod Wave - Tombstone (Official Video).mp3"
];

let trippieReddSongsArr = ["music/Trippie Redd/Diplo - Wish feat. Trippie Redd.mp3",
    "music/Trippie Redd/Trippie Redd - Bird Shit (Lyrics).mp3",
    "music/Trippie Redd/Trippie Redd – Danny Phantom Ft. XXXTENTACION (Official Music Video).mp3",
    "music/Trippie Redd/Trippie Redd – Matt Hardy 999 Ft. Juice WRLD (Official Music Video)_160k.mp3",
    "music/Trippie Redd/Trippie Redd – MP5 Ft. SoFaygo (Official).mp3",
    "music/Trippie Redd/Trippie Redd - Topanga (Official Music Video).mp3",
    "music/Trippie Redd/Trippie Redd Finish Line (Official Lyric Video).mp3",
    "music/Trippie Redd/Trippie Redd Holy Smokes Ft. Lil Uzi Vert (Official Lyric Video).mp3",
    "music/Trippie Redd/Trippie Redd Miss The Rage ft. Playboi Carti (Official Music Video).mp3",
    "music/Trippie Redd/Trippie Redd Weeeeee (Official Music Video).mp3",
    "music/Trippie Redd/Trippie Redd - Under Enemy Arms.mp3"
]

function findSong(songName, songArr) {

    songName = songName.toLowerCase();

    let nameRegex = new RegExp(songName);

    for (let song of songArr) {
        s = song.toLowerCase();

        if (nameRegex.test(s)) {
            return song;
        }
    }
}

let songs = document.querySelectorAll(".song");
let songPlayer = document.querySelector("#song-player");
let audio = document.querySelector("audio");

let songPlayerShown = false;

function showSongPlayer() {
    songPlayer.style.animation = "showSongPlayer 500ms forwards";
    songPlayerShown = true;
    document.querySelector("#main-app").style.marginBottom = "8em";
}

function playSong(song, songArr) {
    let songPath = findSong(song, songArr);
    audio.src = songPath;
    audio.play().catch(err => {
        alert(songPath.split("/")[2] + "\n\n" + err.message)
    })
    songPlayer.children[0].innerText = song;
}

for (let song of songs) {
    song.addEventListener("click", (e) => {
        if (songPlayerShown == false) {
            showSongPlayer();
        }
        let songName = song.innerText;
        if (onRodWave) {
            playSong(songName, rodWaveSongsArr);
        } else if (onTrippieRedd) {
            playSong(songName, trippieReddSongsArr);
        }
    });
}