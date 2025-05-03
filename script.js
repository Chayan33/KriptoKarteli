
let puan = 0;
let xp = 0;
let seviye = 1;
let autoClick = 10;
let xpCarpan = 1;
let bonusAlindi = false;

let xpBar = document.getElementById("xp-fill");
let seviyeYazi = document.getElementById("level");
let puanYazi = document.getElementById("puan");

document.getElementById("click-btn").addEventListener("click", () => {
    puan += autoClick;
    xp += 10 * xpCarpan;
    puanYazi.textContent = puan;
    guncelleXP();
});

setInterval(() => {
    puan += 5;
    xp += 5;
    puanYazi.textContent = puan;
    guncelleXP();
}, 3000);

function guncelleXP() {
    let gerekenXP = seviye * 100;
    let doluluk = Math.min((xp / gerekenXP) * 100, 100);
    xpBar.style.width = doluluk + "%";

    if (xp >= gerekenXP) {
        xp -= gerekenXP;
        seviye++;
        seviyeYazi.textContent = seviye;
        alert("🎉 Seviye atladın! Yeni seviye: " + seviye);
        guncelleXP();
    }
}
