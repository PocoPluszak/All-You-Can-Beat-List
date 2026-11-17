const params = new URLSearchParams(window.location.search);
const levelId = Number(params.get("id"));

const level = levels.find(level => level.id === levelId);

const details = document.getElementById("level-details");

details.innerHTML = `
    <h1>${level.name}</h1>
    <h2>#${level.position}</h2>

    <div class="level-layout">
        <div class="video-container">
            <iframe
                src="https://www.youtube.com/embed/${new URL(level.showcase).searchParams.get('v')}"
                allowfullscreen>
            </iframe>
        </div>

        <div class="level-info">
            <p>Creator: ${level.creator}</p>
            <p>Verifier: ${level.verifier}</p>
            <p>Level ID: ${level.levelID}</p>
        </div>
    </div>
`;