const startDate = new Date('2025-04-09T00:00:00Z');

function createFloatingWorktime() {
    if (document.querySelector('.floating-worktime')) return;

    const floating = document.createElement('div');
    floating.className = 'floating-worktime';
    floating.innerHTML = `
        <div class="floating-label">
            Working on <strong>540deg</strong>
        </div>
        <div class="floating-clock">
            <span id="experience-counter" aria-label="Working on 54deg"></span>
        </div>
    `;
    document.body.appendChild(floating);
}

function updateExperienceCounter(){
    const now = new Date();
    let diff = now - startDate;

    if(diff < 0) 
        diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const text = 
        `${String(days).padStart(2, '0')}:` +
        `${String(hours).padStart(2, '0')}:` +
        `${String(minutes).padStart(2, '0')}:` +
        `${String(seconds).padStart(2, '0')}`;

    const experienceCounter = document.getElementById('experience-counter');
    if (experienceCounter) experienceCounter.textContent = text;
}

createFloatingWorktime();

setInterval(updateExperienceCounter, 1000);
updateExperienceCounter();
