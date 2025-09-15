console.log("JS starting Spotify Demo.....")
async function getsonglinks() {
    let p = await fetch("/songs/") //returns a response 
    let response = await (p.text())//converting the reponse into text
    let parse = new DOMParser
    let htmldoc = parse.parseFromString(response, "text/html")
    console.log(htmldoc)
    links = htmldoc.getElementsByTagName("a")
    getsonglinks = Array.from(links)
        .map(a => a.getAttribute("href"))   // take href
        .filter(href => href.endsWith(".mp3"));
    audio = new Audio(getsonglinks[0])
    // audio.play()
    return getsonglinks




} http://127.0.0.1:3000/index.html


//fucntion to calcuate duration and current time in minute and second
function formatTime(seconds) {
    if (isNaN(seconds)) return "00:00"; // when duration is not loaded yet
    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function getAudioTime(audioElement) {
    let current = formatTime(audioElement.currentTime);
    let duration = formatTime(audioElement.duration);
    return `${current} / ${duration}`;
}



let songs = []
let current_audio = new Audio()
function playmusic(track) {
    songname.innerText = track
    play.src = ("img-svg/pause.png")
    current_audio.src = ("\\songs\\" + track)
    current_audio.addEventListener("timeupdate", () => {
        // console.log(getAudioTime(current_audio));
        songtime.innerText = `${(getAudioTime(current_audio))}`;
        seekpoint.style.left = (((current_audio.currentTime / current_audio.duration) * 100) + "%")
    });
    current_audio.play()


}

//play pause 
play.addEventListener("click", () => {

    if (current_audio.paused) {
        if (current_audio.src == "") {
            playmusic(songs[0])
        }
        else (
            current_audio.play()

        )
        play.src = ("img-svg/pause.png")
    }
    else {
        current_audio.pause()
        play.src = ("img-svg/play.png")
    }
})

//adding previous button event listener
previous.addEventListener("click", () => {
    console.log("previous clicked")
    current_audio_index = songs.indexOf(songname.innerText)
    console.log(current_audio_index)
    if ((current_audio_index) >  0 ) {
        playmusic(songs[current_audio_index - 1])
    }

})

//adding next button event listener
next.addEventListener("click", () => {
    console.log("next clicked")
    current_audio_index = songs.indexOf(songname.innerText)
    console.log(current_audio_index+1)
    if ((current_audio_index+1) < songs.length) {
        playmusic(songs[current_audio_index + 1])
    }
    else {
         playmusic(songs[0])
    }



})


//skipping song through seekbar
seekline.addEventListener("click", (mp) => {
    console.log(mp.target)
    // Get bounding box of the image
    let seekline_position = seekline.getBoundingClientRect();
    let seekline_width = seekline_position.width;

    // Mouse X position relative to the image
    let mouseclick = mp.clientX - seekline_position.left;
    let skip = ((mouseclick / seekline_width) * 100)
    current_audio.currentTime = (current_audio.duration * skip / 100)



})



// getsong()
async function main() {
    //writing songs name in playlists
    links = await getsonglinks()
    console.log(links)
    for (let index = 0; index < links.length; index++) {
        // const element = array[index];
        songs.push(links[index].split("\\songs\\")[1])
        let playlist_UL = document.getElementById("songlist").getElementsByTagName("ol")[0]
        playlist_UL.innerHTML += `<li>${(links[index].split("\\songs\\")[1])}</li>`


    }
    //playing choosen song
    songarray = (Array.from(document.getElementById("songlist").getElementsByTagName("ol")[0].querySelectorAll("li")))
    songarray.forEach(e => {
        // let previousong = ""
        e.addEventListener("click", () => {
            console.log(e.innerText, " is playing")
            playmusic(e.innerText)

        })

    });




}
main()
