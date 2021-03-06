// Data om de raket te laten bewegen
// 3 variabelen voor het totaal aantal dagen dat de raket er over doet, de startdatum van vertrek en de datum van vandaag
var daysTotal = 240;
var startDate = new Date("01/01/2021");
var today = new Date();

// Dit berekent het aantal dagen tussen de begindag en vandaag. Math.round om de dag af te ronden naar een heel getal, want bijv. dag 1,25 bestaat niet
var milSec = today.getTime() - startDate.getTime();
var daysOnTheMove = Math.round(milSec / (1000 * 3600 * 24));

// Geeft het percentage aan hoe ver je al onderweg bent. Bepaalt waar je op de lijn moet zitten 
var percentageDone = daysOnTheMove / daysTotal * 100;
// Verandert de breedte van de container
document.getElementById('rocketWrapper').style.width = percentageDone + '%';

// Haalt de dag op en toont die in de hovertekst
document.getElementById('vandaagDeDag').innerHTML = daysOnTheMove;




// Chart voor eten
var ctx = document.getElementById('voedselVoorraadChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Pizza', 'Soep', 'Bonenmix', 'Havermout'],
        datasets: [{
            label: 'Voedselvoorraad',
            backgroundColor: [
                '#2373F2',
                '#C04FFA',
                '#FFE451',
                '#00CF96'],
            borderColor: '#1E2B3F',
            data: [40, 25, 10, 25],
            borderWidth: '0'
        }]
    },

    // Configuration options go here
    options: {
        // legend: {
        //     position: 'top',
        //     align: 'start'
        // }
        layout: {
            padding: 20
        }
    }
});




// De functie die het aantal mensen laat zien 
var ctx2 = document.getElementById('aantalMensenChart').getContext('2d');
var chart2 = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['vrouw 18+', 'man 18+', 'meisje 18-', 'jongen 18-'],
        datasets: [{
            label: 'Populatie',
            backgroundColor: [
                '#2373F2',
                '#C04FFA',
                '#FFE451',
                '#00CF96'],
            borderColor: 'rgb(255, 99, 132)',
            data: [18, 22, 9, 14],
            barThickness: 8,
        }]
    },

    // Configuration options go here
    options: {
        layout: {
            padding: 20
        }
    }
});