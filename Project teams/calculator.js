// zodiac calculation 
function getZodiac(month, day) {
    if ((month == 1 && day >= 20 && day <= 31) || (month == 2 && day <= 18)) {
        return "Aquarius";
    }
    else if ((month == 2 && day >= 19 && day <= 29) || (month == 3 && day <= 20)) {
        return "Pisces";
    }
    else if ((month == 3 && day >= 21 && day <= 31) || (month == 4 && day <= 19)) {
        return "Aries";
    }
    else if ((month == 4 && day >= 20 && day <= 30) || (month == 5 && day <= 20)) {
        return "Taurus";
    }
    else if ((month == 5 && day >= 21 && day <= 31) || (month == 6 && day <= 20)) {
        return "Gemini";
    }
    else if ((month == 6 && day >= 21 && day <= 30) || (month == 7 && day <= 22)) {
        return "Cancer";
    }
    else if ((month == 7 && day >= 23 && day <= 31) || (month == 8 && day <= 22)) {
        return "Leo";
    }
    else if ((month == 8 && day >= 23 && day <= 31) || (month == 9 && day <= 22)) {
        return "Virgo";
    }
    else if ((month == 9 && day >= 23 && day <= 30) || (month == 10 && day <= 22)) {
        return "Libra";
    }
    else if ((month == 10 && day >= 23 && day <= 31) || (month == 11 && day <= 21)) {
        return "Scorpio";
    }
    else if ((month == 11 && day >= 22 && day <= 30) || (month == 12 && day <= 21)) {
        return "Sagittarius";
    }
    else if ((month == 12 && day >= 22 && day <= 31) || (month == 1 && day <= 19)) {
        return "Capricorn";
    }
    else {
        console.log("Invalid input. Please try again");
        return;
    }
}

//song rec library
const playlists = {
    "Aquarius": { "Pop": ["Song A1","Song A2"], "Indie":["Song A3","Song A4"], "R&B":["Song A5","Song A6"] },
    "Pisces": { "Pop": ["Song P1","Song P2"], "Indie":["Song P3","Song P4"], "R&B":["Song P5","Song P6"] },
    "Aries": { "Pop":["Song AR1","Song AR2"], "Indie":["Song AR3","Song AR4"], "R&B":["Song AR5","Song AR6"] },
    "Taurus": { "Pop":["Song T1"], "Indie":["Song T2"], "R&B":["Song T3"] },
    "Gemini": { "Pop":["Song G1"], "Indie":["Song G2"], "R&B":["Song G3"] },
    "Cancer": { "Pop":["Song C1"], "Indie":["Song C2"], "R&B":["Song C3"] },
    "Leo": { "Pop":["Song L1"], "Indie":["Song L2"], "R&B":["Song L3"] },
    "Virgo": { "Pop":["Song V1"], "Indie":["Song V2"], "R&B":["Song V3"] },
    "Libra": { "Pop":["Song LB1"], "Indie":["Song LB2"], "R&B":["Song LB3"] },
    "Scorpio": { "Pop":["Song S1"], "Indie":["Song S2"], "R&B":["Song S3"] },
    "Sagittarius": { "Pop":["Song SG1"], "Indie":["Song SG2"], "R&B":["Song SG3"] },
    "Capricorn": { "Pop":["Song CP1"], "Indie":["Song CP2"], "R&B":["Song CP3"] }
};

// function for getting playlist based on zodiac and genre
function getPlaylist(zodiac, genre) {
    if (playlists[zodiac] && playlists[zodiac][genre]) {
        return playlists[zodiac][genre];
    }
    return [];
}

// calculation for movie rec
function getMovieRec (zodiac)
{
    if (zodiac == "Aquarius"){
        return "movie"
    }
    if (zodiac == "Pisces"){
        return "movie"
    }
    if (zodiac == "Aries"){
        return "movie"
    }
    if (zodiac == "Taurus"){
        return "movie"
    }
    if (zodiac == "Gemini"){
        return "movie"
    }
    if (zodiac == "Cancer"){
        return "movie"
    }
    if (zodiac == "Leo"){
        return "movie"
    }
    if (zodiac == "Virgo"){
        return "movie"
    }
    if (zodiac == "Libra"){
        return "movie"
    }
    if (zodiac == "Scorpio"){
        return "movie"
    }
    if (zodiac == "Sagittarius"){
        return "movie"
    }
    if (zodiac == "Capricorn") {
        return "movie"
    }
    else {
        return "Error. Please try again"
    }
}

// library for celebrity matches
const celebrityMatches = {
    "Aquarius": { "Pop":"Celebrity AA", "Indie":"Celebrity B", "R&B":"Celebrity C" },
    "Pisces": { "Pop":"Olivia Rodrigo", "Indie":"Celebrity E", "R&B":"Rihanna" },
    "Aries": { "Pop":"Celebrity AA", "Indie":"Celebrity AR2", "R&B":"Celebrity AR3" },
    "Taurus": { "Pop":"Celebrity T1", "Indie":"Celebrity T2", "R&B":"Celebrity T3" },
    "Gemini": { "Pop":"Celebrity G1", "Indie":"Celebrity G2", "R&B":"Celebrity G3" },
    "Cancer": { "Pop":"Celebrity C", "Indie":"Celebrity C2", "R&B":"Celebrity C3" },
    "Leo": { "Pop":"Celebrity L", "Indie":"Celebrity L2", "R&B":"Celebrity L3" },
    "Virgo": { "Pop":"Celebrity V", "Indie":"Celebrity V2", "R&B":"Celebrity V3" },
    "Libra": { "Pop":"Celebrity LB", "Indie":"Celebrity LB2", "R&B":"Celebrity LB3" },
    "Scorpio": { "Pop":"Celebrity S", "Indie":"Celebrity S2", "R&B":"Celebrity S3" },
    "Sagittarius": { "Pop":"Celebrity SG", "Indie":"Celebrity SG2", "R&B":"Celebrity SG3" },
    "Capricorn": { "Pop":"Celebrity CP", "Indie":"Celebrity CP2", "R&B":"Celebrity CP3" }
};

// calculation function for celebrity
function getCelebrity(zodiac, genre) {
    if (celebrityMatches[zodiac] && celebrityMatches[zodiac][genre]) {
        return celebrityMatches[zodiac][genre];
    }
    return "Unknown";
}
// destination calculation
function getDestination (zodiac)
{
    if (zodiac == "Aquarius"){
        return "destination1"
    }
    if (zodiac == "Pisces"){
        return "destination2"
    }
    if (zodiac == "Aries"){
        return "destination3"
    }
    if (zodiac == "Taurus"){
        return "destination4"
    }
    if (zodiac == "Gemini"){
        return "destination5"
    }
    if (zodiac == "Cancer"){
        return "destination6"
    }
    if (zodiac == "Leo"){
        return "destination7"
    }
    if (zodiac == "Virgo"){
        return "destination8"
    }
    if (zodiac == "Libra"){
        return "destination9"
    }
    if (zodiac == "Scorpio"){
        return "destination10"
    }
    if (zodiac == "Sagittarius"){
        return "destination11"
    }
    if (zodiac == "Capricorn") {
        return "destination12"
    }
    else {
        return "Error. Please try again"
    }
}

// main calculate function
function calculate() {
    let month = parseInt(document.getElementById("month").value);
    let day = parseInt(document.getElementById("day").value);
    let genre = document.getElementById("genre").value;

    let zodiac = getZodiac(month, day);
    if(!zodiac) return; // invalid input

    let songs = getPlaylist(zodiac, genre);
    let celebrity = getCelebrity(zodiac, genre);
    let movies = getMovieRec(zodiac);
    let destination = getDestination(zodiac);

    document.getElementById("zodiacResult").innerText = "Your Zodiac: " + zodiac;
    document.getElementById("songRecs").innerText = songs.join(", ");
    document.getElementById("celebrityMatch").innerText = celebrity;
    document.getElementById("recommendedMovies").innerText = movies;
    document.getElementById("destination").innerText = destination;
}
