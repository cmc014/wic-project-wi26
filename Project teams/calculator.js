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
    "Aquarius": { "Pop": ["\"Party Monster\" The Weeknd"], "Indie":["\"Moonlight On The River\" Mac Demarco"], "R&B":["\"Call Out My Name\" The Weeknd"] },
    "Pisces": { "Pop": ["\"Born This Way\" Lady Gaga"], "Indie":["\"Losing You\" Solange"], "R&B":["\"Normal Girl\" SZA"] },
    "Aries": { "Pop":["\"Moves Like Jagger\" Maroon 5, Christina Aguilera",], "Indie":["\"Lover's Rock\" TV Girl"], "R&B":["\"Lady of Neptune\" Tory Lanez"] },
    "Taurus": { "Pop":["\"Love To Love You Baby\" Donna Summer"], "Indie":["\"Image\" Magdalena Bay"], "R&B":["\"The Boy Is Mine\" Brandy, Monica"] },
    "Gemini": { "Pop":["\"Just Dance\" Lady Gaga"], "Indie":["\"Supercut\" Lorde"], "R&B":["\"Sure Thing\" Miguel"] },
    "Cancer": { "Pop":["\"yes, and?\" Ariana Grande"], "Indie":["\"About You\" The 1975"], "R&B":["\"Hit Different\" SZA"] },
    "Leo": { "Pop":["\"Vogue\" Madonna"], "Indie":["\"Sexy to Someone\" Clairo"], "R&B":["\"Say My Name\" Destiny's Child"] },
    "Virgo": { "Pop":["\"VIRGO'S GROOVE\" Beyoncé"], "Indie":["\"Stargazing\" The Neighborhood"], "R&B":["\"Thinkin Bout You\" Frank Ocean"] },
    "Libra": { "Pop":["\"PUSH 2 START\" Tyla"], "Indie":["\"You Are the Right One\" Sports"], "R&B":["\"Love On The Brain\" Rihanna"] },
    "Scorpio": { "Pop":["\"The One That Got Away\" Katy Perry"], "Indie":["\"How to disappear\" Lana Del Rey"], "R&B":["\"Insane\" Summer Walker"] },
    "Sagittarius": { "Pop":["\"We Can't Stop\" Miley Cyrus"], "Indie":["\"Let It Happen\" Tame Impala"], "R&B":["\"Belong to the City\" PARTYNEXTDOOR"] },
    "Capricorn": { "Pop":["\"Good Luck, Babe\" Chappell Roan"], "Indie":["\"Show Me How\" Men I Trust"], "R&B":["\"Sorrows\" Bryson Tiller"] }
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
        return "\'Parasite\'"
    }
    if (zodiac == "Pisces"){
        return "'500 Days of Summer\'"
    }
    if (zodiac == "Aries"){
        return "\'The Notebook\'"
    }
    if (zodiac == "Taurus"){
        return "\'Whiplash\'"
    }
    if (zodiac == "Gemini"){
        return "'Forrest Gump\'"
    }
    if (zodiac == "Cancer"){
        return "\'Pride and Prejudice\'"
    }
    if (zodiac == "Leo"){
        return "'Superbad\'"
    }
    if (zodiac == "Virgo"){
        return "\'The Great Gatsby\'"
    }
    if (zodiac == "Libra"){
        return "\'Wuthering Heights\'"
    }
    if (zodiac == "Scorpio"){
        return "\'The Social Network\'"
    }
    if (zodiac == "Sagittarius"){
        return "\'13 Going on 30\'"
    }
    if (zodiac == "Capricorn") {
        return "\'Eternal Sunshine of the Spotless Mind\'"
    }
    else {
        return "Error. Please try again"
    }
}

// library for celebrity matches
const celebrityMatches = {
    "Aquarius": { "Pop":"Celebrity AA", "Indie":"Celebrity B", "R&B":"Celebrity C" },
    "Pisces": { "Pop":"Celebrity PA", "Indie":"Celebrity E", "R&B":"Celebrity F" },
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
        return "San Francisco"
    }
    if (zodiac == "Pisces"){
        return "Tokyo"
    }
    if (zodiac == "Aries"){
        return "Paris"
    }
    if (zodiac == "Taurus"){
        return "Rome"
    }
    if (zodiac == "Gemini"){
        return "Shanghai"
    }
    if (zodiac == "Cancer"){
        return "Dubai"
    }
    if (zodiac == "Leo"){
        return "Rio de Janeiro"
    }
    if (zodiac == "Virgo"){
        return "Capetown"
    }
    if (zodiac == "Libra"){
        return "New York"
    }
    if (zodiac == "Scorpio"){
        return "Copenhagen"
    }
    if (zodiac == "Sagittarius"){
        return "Miami"
    }
    if (zodiac == "Capricorn") {
        return "London"
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
