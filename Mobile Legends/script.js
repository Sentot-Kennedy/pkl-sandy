const heroes = {
    'Khaleed': {
        role: 'Fighter',
        description: 'Seorang prajurit pemberani yang mengambil alih kekuasaan gurun.',
        skills: [
            { name: 'Desert Tornado', description: 'Khaleed mengayunkan pedangnya ke lawan di sekitar dan menarik mereka ke arahnya.', image: 'Gambar/Khaleed/skill-1.png' },
            { name: 'Quicksand Guard', description: 'Khaleed melindungi dirinya dengan kekuatan pasir hisap, memulihkan 60+5% HP-nya yang hilang.', image: 'Gambar/Khaleed/skill-2.png' },
            { name: 'Ragging Sandstorm', description: 'Khaleed mengendarai badai pasir dan bergerak ke lokasi yang ditentukan.', image: 'Gambar/Khaleed/skill-3.png' },
        ],
        image: 'Gambar/Khaleed/Khaleed-2.jpg'
    },
    'Arlott': {
        role: 'Fighter / Assassin',
        description: 'Manusia iblis hibrida yang menghunus dua tombak dengan hasrat membalas dendam terhadap Gereja dan iblis.',
        skills: [
            { name: 'Dauntless Strike', description: 'Arlott mengayunkan tombaknya ke depan, Menyebabkan Stun singkat kepada target di area.', image: 'Gambar/Arlott/skill-1.png' },
            { name: 'Vengeance', description: 'Arlott menyerang musuh dan memberikan 160 (+60% Total Physical Attack) Physical Damage (skill ini tidak dapat diganggu saat bergerak).', image: 'Gambar/Arlott/skill-2.png' },
            { name: 'Final Slash', description: 'Arlott menyerang ke depan dengan kekuatan penuh, memberikan Physical Damage kepada semua musuh di jalurnya.', image: 'Gambar/Arlott/skill-3.png' },
        ],
        image: 'Gambar/Arlott/Arlott-new.jpg'
    },
    'Balmond': {
        role: 'Tank / Fighter',
        description: 'Seorang pejuang barbar dengan kekuatan luar biasa dan kapak besar.',
        skills: [
            { name: 'Soul Lock', description: 'Balmond mengunci target dengan kapaknya, memberikan Physical Damage dan memperlambat target.', image: 'Gambar/Balmond/skill-1.png' },
            { name: 'Cyclone Sweep', description: 'Balmond berputar dengan kapaknya, memberikan Physical Damage kepada musuh di sekitarnya.', image: 'Gambar/Balmond/skill-2.png' },
            { name: 'Lethal Counter', description: 'Balmond menyerang dengan kapaknya, memberikan Physical Damage berdasarkan HP yang hilang dari target.', image: 'Gambar/Balmond/skill-3.png' },
        ],
        image: 'Gambar/Balmond/Balmond Mobile Legends Wallpaper Hd.jpeg'
    },
    'Helcurt': {
        role: 'Assassin',
        description: 'Pembunuh mematikan yang bisa menghilang dalam bayangan.',
        skills: [
            { name: 'Shadow Raid', description: 'Helcurt menghilang dan muncul kembali di lokasi yang ditentukan, memberikan Physical Damage.', image: 'Gambar/Helcurt/skill-1.png' },
            { name: 'Deadly Poisoned Stinger', description: 'Helcurt melemparkan stinger beracun ke musuh, memberikan Physical Damage.', image: 'Gambar/Helcurt/skill-2.png' },
            { name: 'Dark Night Falls', description: 'Helcurt menyebabkan kegelapan di medan perang, mengurangi jarak pandang musuh.', image: 'Gambar/Helcurt/skill-3.png' },
        ],
        image: 'Gambar/Helcurt/Helcurt Mobile Legends Wallpaper HD.jpeg'
    },
    'Lapu-Lapu': {
        role: 'Fighter',
        description: 'Pejuang legendaris dengan dua senjata yang kuat.',
        skills: [
            { name: 'Justice Blades', description: 'Lapu-Lapu melemparkan dua pedang ke arah yang ditentukan, memberikan Physical Damage.', image: 'Gambar/Lapu/skill-1.png' },
            { name: 'Jungle Warrior', description: 'Lapu-Lapu melompat ke lokasi yang ditentukan, memberikan Physical Damage dan menyebabkan efek slow.', image: 'Gambar/Lapu/skill-2.png' },
            { name: 'Bravest Fighter', description: 'Lapu-Lapu mengaktifkan kemampuan ultimate-nya, meningkatkan Physical Attack dan memberikan Physical Damage kepada musuh di sekitar.', image: 'Gambar/Lapu/skill-3.png' },
        ],
        image: 'Gambar/Lapu/Lapu-2.png'
    },
    'Martis': {
        role: 'Fighter',
        description: 'Pejuang kuat dengan kemampuan bertarung yang hebat.',
        skills: [
            { name: 'Ashura Aura', description: 'Martis menyerang dengan pedangnya, memberikan Physical Damage dan menarik musuh ke arahnya.', image: 'Gambar/Martis/skill-1.png' },
            { name: 'Mortal Coil', description: 'Martis menyerang dengan pedangnya secara beruntun, memberikan Physical Damage kepada musuh di jalurnya.', image: 'Gambar/Martis/skill-2.png' },
            { name: 'Decimation', description: 'Martis menyerang dengan kekuatan penuh, memberikan Physical Damage dan membunuh musuh dengan HP rendah.', image: 'Gambar/Martis/skill-3.png' },
        ],
        image: 'Gambar/Martis/Martis-2.jpg'
    },
    'Minotaur': {
        role: 'Tank',
        description: 'Minotaur kuat dengan kemampuan regenerasi tinggi.',
        skills: [
            { name: 'Despair Hammer', description: 'Minotaur menghantam tanah dengan palunya, memberikan Physical Damage dan menyebabkan efek slow.', image: 'Gambar/Mino/skill-1.png' },
            { name: 'Motivation Roar', description: 'Minotaur mengeluarkan raungan yang memberikan regenerasi HP kepada dirinya dan sekutu di sekitarnya.', image: 'Gambar/Mino/skill-2.png' },
            { name: 'Minoan Fury', description: 'Minotaur mengamuk, memberikan Physical Damage kepada musuh di sekitar dan menyebabkan efek stun.', image: 'Gambar/Mino/skill-3.png' },
        ],
        image: 'Gambar/Mino/Mino-new.jpg'
    },
    'Paquito': {
        role: 'Fighter',
        description: 'Petarung tangguh dengan kecepatan dan kekuatan luar biasa.',
        skills: [
            { name: 'Champ Stance', description: 'Paquito mengambil sikap bertarung, meningkatkan Physical Attack-nya.', image: 'Gambar/Paquito/skill-1.png' },
            { name: 'Jab', description: 'Paquito menyerang dengan cepat, memberikan Physical Damage kepada musuh di depannya.', image: 'Gambar/Paquito/skill-2.png' },
            { name: 'Knockout Strike', description: 'Paquito melompat ke depan dan menyerang dengan pukulan kuat, memberikan Physical Damage dan menyebabkan efek knockback.', image: 'Gambar/Paquito/skill-3.png' },
        ],
        image: 'Gambar/Paquito/Paquito-2.jpg'
    },
    'Terizla': {
        role: 'Fighter',
        description: 'Prajurit yang marah dengan palu besar.',
        skills: [
            { name: 'Revenge Strike', description: 'Terizla menyerang dengan palunya, memberikan Physical Damage dan menyebabkan efek slow.', image: 'Gambar/Terizla/skill-1.png' },
            { name: 'Execution Strike', description: 'Terizla mengayunkan palunya secara beruntun, memberikan Physical Damage kepada musuh di depannya.', image: 'Gambar/Terizla/skill-2.png' },
            { name: 'Penalty Zone', description: 'Terizla menyerang tanah dengan palunya, memberikan Physical Damage dan menyebabkan efek stun kepada musuh di sekitarnya.', image: 'Gambar/Terizla/skill-3.png' },
        ],
        image: 'Gambar/Terizla/Terizla-2.jpg'
    },
    'Thamuz': {
        role: 'Fighter',
        description: 'Prajurit iblis dengan kemampuan bertarung yang mematikan.',
        skills: [
            { name: 'Molten Scythes', description: 'Thamuz melemparkan sabitnya ke arah yang ditentukan, memberikan Physical Damage dan menyebabkan efek slow.', image: 'Gambar/Thamuz/skill-1.png' },
            { name: 'Chasm Trample', description: 'Thamuz melompat ke lokasi yang ditentukan, memberikan Physical Damage dan menyebabkan efek slow kepada musuh di sekitarnya.', image: 'Gambar/Thamuz/skill-2.png' },
            { name: 'Cauterant Inferno', description: 'Thamuz mengaktifkan kemampuan ultimate-nya, meningkatkan Physical Attack dan memberikan Physical Damage kepada musuh di sekitarnya.', image: 'Gambar/Thamuz/skill-3.png' },
        ],
        image: 'Gambar/Thamuz/Thamuz-2.jpg'
    }
};

function selectHero(heroName) {
    const hero = heroes[heroName];
    const selectedHeroContainer = document.getElementById('selected-hero-container');
    const selectedHero = document.getElementById('selected-hero');
    const title = document.getElementById('title');

    selectedHero.innerHTML = `
        <img src="${hero.image}" alt="${heroName}">
        <div>
            <h2>${heroName}</h2>
            <p><strong>Role:</strong> ${hero.role}</p>
            <p>${hero.description}</p>
            <h3>Skills:</h3>
            <ul>
                ${hero.skills.map(skill => `
                    <li>
                        <img src="${skill.image}" alt="${skill.name}">
                        <div>
                            <strong>${skill.name}</strong>
                            <p>${skill.description}</p>
                        </div>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;

    selectedHeroContainer.style.display = 'flex';
    document.querySelector('.heroes').style.display = 'none';
    title.classList.add('hidden');
}

function goBack() {
    document.getElementById('selected-hero-container').style.display = 'none';
    document.querySelector('.heroes').style.display = 'flex';
    document.getElementById('title').classList.remove('hidden');
}
