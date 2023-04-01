const leaderboard = [{username:"payal",score:10},{username:"ritwik",score:10},{username:"owais",score:10},{username:"riyanshi",score:10}]
    const leaderboardBody = document.getElementById("leaderboard-body");
    for(let i = 0; i,leaderboard.length; i++){
        const row = document.createElement("tr");
        row.innerHTML = '<td>${leaderboard[i].username}</td><td>${leaderboard[i].score}</td>';
        leaderboardBody.appendChild(row);
    }