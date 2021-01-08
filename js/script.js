var socket = io();
socket.on('temp', function(data) {
    console.log(data);
    document.getElementById('zone1Tem').innerHTML = `${data}`;
    var teperature = `${data}`;
    //fonction pour changer d'images en fonction de la temperature
    //document.getElementById('img').src = 'im1';
 if (data <= 26) {
        document.getElementById('img').innerHTML = '<img src="/im1" alt="Ambient" title="Temperature < = 26 " style="width:40px; height:44px;">';
    } else {
        document.getElementById('img').innerHTML = '<img src="/imLogo" alt="Chaud" title="Temperature >= 26 " style="width:40px; height:44px; border-radius: 32px;">';
    }
    if (data <= 26) {
        document.getElementById('rectangle2').innerHTML = '<img src="/im" alt="Il fait beau" style="width:640px; height:544px; float:left;">';
    } else {
        document.getElementById('rectangle2').innerHTML = '<img src="/im2" alt="Il fait chaud" style="width:640px; height:544px; float:left;">';
    }
    date = new Date();
    mois = date.getMonth();
    if (mois == (mois + 1) || mois == (mois + 2) || mois == (mois + 6) || mois == (mois + 8) || mois == (mois + 12)) {
        document.getElementById('saisonn').innerHTML = "E T E";
    }
    if (mois == (mois + 3) || mois == (mois + 4) || mois == (mois + 5) || mois == (mois + 7) || mois == (mois + 9) || mois == (mois + 10) || mois == (mois + 11)) {
        document.getElementById('saisonn').innerHTML = "H I V E R";
    }
});

function date_heure(id) {
    date = new Date;
    annee = date.getFullYear();
    moi = date.getMonth();
    mois = new Array('Janvier', 'F&eacute;vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao&ucirc;t', 'Septembre', 'Octobre', 'Novembre', 'D&eacute;cembre');
    j = date.getDate();
    jour = date.getDay();
    jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
    h = date.getHours();
    if (h < 10) { h = "0" + h; }
    m = date.getMinutes();
    if (m < 10) { m = "0" + m; }
    s = date.getSeconds();
    if (s < 10) { s = "0" + s; }
    resultat = '' + jours[jour] + ' ' + j + ' ' + mois[moi] + ' ' + annee + ' ' + h + ':' + m + ':' + s;
    document.getElementById(id).innerHTML = resultat;
    setTimeout('date_heure("' + id + '");', '1000');
    return true;
}
