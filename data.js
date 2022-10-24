const nama = "Itaw";
let usia = 1;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if (usia >= 10 && usia < 18) {
        generasi = "generasi remaja";    
    } 
    else if (usia >=18 && usia <30) {
        generasi = 'generasi dewasa';
    } 
    else if (usia >= 30 && usia < 50) {
        generasi = 'generasi tua';
    }
    else if (usia >= 2 && usia < 10) {
        generasi = 'generasi balita';
    }
    else {
        generasi = 'generasi karuhun';
    }
    
    return biodata.innerHTML = generasi;

}


console.log(nama);
console.log(usia);

generateBiodata();

const myCarouselElement = document.querySelector('#myCarousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  wrap: false
})