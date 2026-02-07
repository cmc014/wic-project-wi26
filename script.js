// Zodiac sign data with date ranges
const zodiacSigns = [
    { name: 'Capricorn', start: [12, 22], end: [1, 19], emoji: '♑' },
    { name: 'Aquarius', start: [1, 20], end: [2, 18], emoji: '♒' },
    { name: 'Pisces', start: [2, 19], end: [3, 20], emoji: '♓' },
    { name: 'Aries', start: [3, 21], end: [4, 19], emoji: '♈' },
    { name: 'Taurus', start: [4, 20], end: [5, 20], emoji: '♉' },
    { name: 'Gemini', start: [5, 21], end: [6, 20], emoji: '♊' },
    { name: 'Cancer', start: [6, 21], end: [7, 22], emoji: '♋' },
    { name: 'Leo', start: [7, 23], end: [8, 22], emoji: '♌' },
    { name: 'Virgo', start: [8, 23], end: [9, 22], emoji: '♍' },
    { name: 'Libra', start: [9, 23], end: [10, 22], emoji: '♎' },
    { name: 'Scorpio', start: [10, 23], end: [11, 21], emoji: '♏' },
    { name: 'Sagittarius', start: [11, 22], end: [12, 21], emoji: '♐' }
];

// Pop culture recommendations for each sign
const recommendations = {
    Aries: {
        music: ['High-energy pop', 'Rock', 'Dua Lipa', 'Olivia Rodrigo', 'Hype playlists'],
        movies: ['Action films', 'Fast & Furious', 'Marvel movies', 'Hunger Games'],
        fashion: ['Bold colors', 'Athleisure', 'Statement sneakers', 'Red everything'],
        vibes: ['Confident boss energy', 'Adventurous', 'Competitive', 'Trailblazer']
    },
    Taurus: {
        music: ['R&B', 'SZA', 'Frank Ocean', 'Chill vibes', 'Sensual playlists'],
        movies: ['Romantic dramas', 'The Notebook', 'Chef', 'Food documentaries'],
        fashion: ['Luxury basics', 'Earth tones', 'Cozy textures', 'Designer bags'],
        vibes: ['Comfort first', 'Luxurious', 'Nature lover', 'Foodie aesthetic']
    },
    Gemini: {
        music: ['Pop hits', 'Ariana Grande', 'Billie Eilish', 'Eclectic playlists'],
        movies: ['Comedies', 'Social Network', 'Mean Girls', 'Clever dialogue'],
        fashion: ['Mix & match', 'Trendy pieces', 'Colorful', 'Versatile wardrobe'],
        vibes: ['Social butterfly', 'Curious mind', 'Multi-tasker', 'Always connected']
    },
    Cancer: {
        music: ['Emotional ballads', 'Taylor Swift', 'Lana Del Rey', 'Nostalgic hits'],
        movies: ['Coming-of-age', 'The Perks of Being a Wallflower', 'Studio Ghibli'],
        fashion: ['Soft pastels', 'Vintage pieces', 'Cozy sweaters', 'Sentimental jewelry'],
        vibes: ['Homebody', 'Nostalgic', 'Nurturing', 'Emotional depth']
    },
    Leo: {
        music: ['Pop anthems', 'Beyoncé', 'Lizzo', 'Confident bangers'],
        movies: ['Musicals', 'La La Land', 'Greatest Showman', 'Star is Born'],
        fashion: ['Statement pieces', 'Gold accents', 'Bold prints', 'Dramatic looks'],
        vibes: ['Main character energy', 'Glamorous', 'Performative', 'Center stage']
    },
    Virgo: {
        music: ['Indie', 'Alternative', 'Phoebe Bridgers', 'Thoughtful lyrics'],
        movies: ['Smart comedies', 'Little Miss Sunshine', 'Documentaries'],
        fashion: ['Clean lines', 'Minimalist', 'Neutral palette', 'Organized closet'],
        vibes: ['Organized aesthetic', 'Analytical', 'Health conscious', 'Perfectionist']
    },
    Libra: {
        music: ['Romantic pop', 'The Weeknd', 'Sabrina Carpenter', 'Smooth R&B'],
        movies: ['Rom-coms', 'Clueless', 'Legally Blonde', 'Aesthetic films'],
        fashion: ['Balanced looks', 'Pastels & neutrals', 'Coordinated sets', 'Pretty pieces'],
        vibes: ['Aesthetic curator', 'Harmonious', 'Social grace', 'Beauty lover']
    },
    Scorpio: {
        music: ['Dark pop', 'The Weeknd', 'FKA Twigs', 'Intense lyrics'],
        movies: ['Thrillers', 'Gone Girl', 'Black Swan', 'Psychological dramas'],
        fashion: ['All black', 'Edgy pieces', 'Leather', 'Mysterious vibes'],
        vibes: ['Intense energy', 'Mysterious', 'Passionate', 'Transformative']
    },
    Sagittarius: {
        music: ['World music', 'Upbeat tracks', 'Festival vibes', 'Travel playlists'],
        movies: ['Adventure films', 'Into the Wild', 'Eat Pray Love', 'Travel docs'],
        fashion: ['Boho chic', 'Travel-friendly', 'Eclectic patterns', 'Comfortable & fun'],
        vibes: ['Wanderlust', 'Optimistic', 'Free spirit', 'Adventure seeker']
    },
    Capricorn: {
        music: ['Classic hits', 'The Weeknd', 'Timeless tracks', 'Sophisticated'],
        movies: ['Prestige dramas', 'The Wolf of Wall Street', 'Career-focused'],
        fashion: ['Professional chic', 'Timeless pieces', 'Structured', 'Investment items'],
        vibes: ['Ambitious', 'Classic taste', 'Goal-oriented', 'Success-driven']
    },
    Aquarius: {
        music: ['Alternative', 'Experimental', 'Tyler the Creator', 'Unique artists'],
        movies: ['Sci-fi', 'Black Mirror', 'Innovative storytelling', 'Futuristic'],
        fashion: ['Unconventional', 'Streetwear', 'Tech wear', 'Unique pieces'],
        vibes: ['Innovative', 'Humanitarian', 'Tech-savvy', 'Individualistic']
    },
    Pisces: {
        music: ['Dreamy pop', 'Billie Eilish', 'Lorde', 'Ethereal sounds'],
        movies: ['Fantasy', 'Spirited Away', 'Harry Potter', 'Dreamy cinematography'],
        fashion: ['Flowing fabrics', 'Purples & blues', 'Whimsical', 'Artistic pieces'],
        vibes: ['Dreamy aesthetic', 'Artistic soul', 'Empathetic', 'Imaginative']
    }
};

function getZodiacSign(month, day) {
    for (let sign of zodiacSigns) {
        const [startMonth, startDay] = sign.start;
        const [endMonth, endDay] = sign.end;

        if (startMonth === endMonth) {
            if (month === startMonth && day >= startDay && day <= endDay) {
                return sign.name;
            }
        } else {
            if ((month === startMonth && day >= startDay) || 
                (month === endMonth && day <= endDay)) {
                return sign.name;
            }
        }
    }
    return 'Unknown';
}

function calculateChart(event) {
    event.preventDefault();

    const birthdate = document.getElementById('birthdate').value;
    const birthtime = document.getElementById('birthtime').value;
    const location = document.getElementById('location').value;

    if (!birthdate || !birthtime || !location) {
        alert('Please fill in all fields!');
        return;
    }

    const date = new Date(birthdate);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    // Calculate sun sign
    const sunSign = getZodiacSign(month, day);

    // For demo purposes, generate other signs
    const allSigns = zodiacSigns.map(s => s.name);
    const timeHour = parseInt(birthtime.split(':')[0]);

    const moonSign = allSigns[(allSigns.indexOf(sunSign) + (timeHour % 4)) % 12];
    const risingSign = allSigns[(allSigns.indexOf(sunSign) + (timeHour % 6)) % 12];
    const venusSign = allSigns[(allSigns.indexOf(sunSign) + 2) % 12];

    // Display results
    document.getElementById('sunSign').textContent = sunSign;
    document.getElementById('sunDate').textContent = 'Core Identity';
    document.getElementById('moonSign').textContent = moonSign;
    document.getElementById('moonDate').textContent = 'Emotional Self';
    document.getElementById('risingSign').textContent = risingSign;
    document.getElementById('risingDate').textContent = 'First Impression';
    document.getElementById('venusSign').textContent = venusSign;
    document.getElementById('venusDate').textContent = 'Love & Style';
    document.getElementById('mainSign').textContent = sunSign;
    document.getElementById('chartSummary').textContent = sunSign;

    // Show results section
    document.getElementById('results').classList.add('active');

    // Load recommendations
    loadRecommendations(sunSign);

    // Scroll to results
    setTimeout(() => {
        document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
}

function loadRecommendations(sign) {
    const recs = recommendations[sign] || recommendations.Aries;
    const grid = document.getElementById('recommendationsGrid');

    grid.innerHTML = `
        <div class="rec-card" data-category="music">
            <div class="rec-icon">🎵</div>
            <h4>Your Music Vibe</h4>
            <ul class="rec-list">
                ${recs.music.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        <div class="rec-card" data-category="movies">
            <div class="rec-icon">🎬</div>
            <h4>Movies You'll Love</h4>
            <ul class="rec-list">
                ${recs.movies.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        <div class="rec-card" data-category="fashion">
            <div class="rec-icon">👗</div>
            <h4>Your Fashion Style</h4>
            <ul class="rec-list">
                ${recs.fashion.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        <div class="rec-card" data-category="vibes">
            <div class="rec-icon">✨</div>
            <h4>Your Aesthetic</h4>
            <ul class="rec-list">
                ${recs.vibes.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;
}

function showCategory(category) {
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter cards
    const cards = document.querySelectorAll('.rec-card');
    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            card.style.display = card.dataset.category === category ? 'block' : 'none';
        }
    });
}

function scrollToCalculator() {
    document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
}
