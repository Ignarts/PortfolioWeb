const username = "Ignarts";
const profileDiv = document.getElementById("profile");
const reposDiv = document.getElementById("repos");

document.addEventListener('DOMContentLoaded', function () {
    fetchGitHubData();
});

async function fetchGitHubData() {
    const profileRes = await fetch(`https://api.github.com/users/${username}`);
    const profileData = await profileRes.json();

    profileDiv.innerHTML = `
        <a href="${profileData.html_url}" target="_blank">GitHub</a>
    `;

    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`);
    const reposData = await reposRes.json();

    reposDiv.innerHTML = reposData.map(repo => `
        <div class="repo" data-url="${repo.html_url}">
            <img src="../Resources/Home/SVG/github.svg" alt="GitHub Icon" class="repo-icon">
            <div>
                <h3>${repo.name}</h3>
                <p>${repo.description || "Without Description"}</p>
            </div>
        </div>
    `).join('');

    // Add click event listener to each repo div
    document.querySelectorAll('.repo').forEach(repoDiv => {
        repoDiv.addEventListener('click', () => {
            window.open(repoDiv.getAttribute('data-url'), '_blank');
        });
    });
}
