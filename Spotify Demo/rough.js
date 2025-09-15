// async function getSongs() {
//   const res = await fetch("/songs/");
// //   console.log(res)
//   const text = await res.text(); // HTML response
//   console.log(text)
//   const parser = new DOMParser();
// //   console.log(parser)
//   const doc = parser.parseFromString(text, "text/html");

//   // Get all links ending with .mp3
//   const links = [...doc.querySelectorAll("a")]
//     .map(a => a.getAttribute("href"))
//     .filter(href => href.endsWith(".mp3"));

// //   console.log(links);
// }
// getSongs();
// async function getsongs() {
//     let p =  fetch("/songs/")
//     p.then((response) => {
//         // console.log(response)
//         //Getting Response
//         return (response.text())
//     }).then((value2) => {
//         //parsing data to conver it into HTML
//         let parse = new DOMParser();
//         console.log(value2)
//         let parseddocument = parse.parseFromString(value2, "text/html")
//         //getting a link from the HTML
//         let songslink = (parseddocument.querySelectorAll("a"))
//         return (songslink)
//     })
    
    
//         // .then((songslink) => {
//         //     //Getting the Name only to show in the site
//         //     songslink.forEach(songlink => {
//         //         // const(songlink.href)
//         //         let songpath = (songlink.href)
//         //         songpart = songpath.split("/")
//         //         song = songpart.pop().replaceAll("%20", " ")
//         //         console.log(song)
//         //         document.getElementById("songlist").getElementsByTagName("ol")[0].innerHTML += `<li>${song}</li>`




//         //         // http://127.0.0.1:3000/songs/24kGoldn%20-%20Mood%20(Official%20Video)%20ft.%20iann%20dior.mp3
//         //     })
//         // })


// }
// let songlist = getsongs()
let songList = [];  // global array to store songs

async function getsongs() {
  let response = await fetch("/songs/");
  let htmlText = await response.text();

  // Parse the HTML into a document
  let parser = new DOMParser();
  let doc = parser.parseFromString(htmlText, "text/html");

  // Get all <a> links
  let links = doc.querySelectorAll("a");

  // Convert NodeList → Array → only .mp3 files
  songList = Array.from(links)
    .map(a => a.getAttribute("href"))   // take href
    .filter(href => href.endsWith(".mp3"));  // keep only songs

  return songList; // return array too
}

async function getsonglink(){
songList.push(await getsongs())
}

getsonglink()
console.log(songList)
console.log("start")
console.log(songList[0])
// songList.forEach(sg => {
//     console.log(sg)
    
// });
// for (let index = 0; index < 4; index++) {
//     // const element = array[index];
    
// }