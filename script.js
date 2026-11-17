const leaderboard = document.getElementById("leaderboard");

levels.forEach(level => {
    const card = document.createElement("a");

    card.className = "level-card";
    card.href = `level.html?id=${level.id}`;

   card.innerHTML = `
    <img src="${level.thumbnail}" class="level-thumbnail">
    <span class="rank">#${level.position}</span>
    <span class="level-name">${level.name}</span>
    <span class="creator">${level.creator}</span>
`;

    leaderboard.appendChild(card);
});
