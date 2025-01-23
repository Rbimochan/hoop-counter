let homeCount = 0;
let guestCount = 0;

function resetScores(e) {
    if (e.target.className === 'container') {
        homeCount = 0;
        guestCount = 0;
        document.getElementById('hbtn-show').innerHTML = homeCount;
        document.getElementById('gbtn-show').innerHTML = guestCount;
    }
}

function addHomeScore(value, e) {
    e.stopPropagation();
    homeCount += value;
    document.getElementById('hbtn-show').innerHTML = homeCount;
}

function addGuestScore(value, e) {
    e.stopPropagation();
    guestCount += value;
    document.getElementById('gbtn-show').innerHTML = guestCount;
}

// Add click event to container
document.querySelector('.container').addEventListener('click', resetScores);

// Button handlers with stopPropagation
document.getElementById('hbtn1').onclick = (e) => addHomeScore(1, e);
document.getElementById('hbtn2').onclick = (e) => addHomeScore(2, e);
document.getElementById('hbtn3').onclick = (e) => addHomeScore(3, e);

document.getElementById('gbtn1').onclick = (e) => addGuestScore(1, e);
document.getElementById('gbtn2').onclick = (e) => addGuestScore(2, e);
document.getElementById('gbtn3').onclick = (e) => addGuestScore(3, e);