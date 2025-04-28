// Get Element Penting
const konversiInput = document.getElementById('konversi-input');
const resultInput = document.getElementById('result-input');
const calculateDetail = document.getElementById('calculate-detail');
const buttons = document.querySelectorAll('button')

// State tracking mode
let isCelciusToFahrenheit = true;

// Function Konversi
function konversiSuhu(){
    const inputValue = parseFloat(konversiInput.value);

    // Validasi Input
    if (isNaN(inputValue)){
        alert('Masukkan angka yang valid!');
        return;
    }

    let hasil = 0;
    let detail = '';
    
    if (isCelciusToFahrenheit){
        hasil = (inputValue * 9/5) + 32;
        detail = `${inputValue}°C x 9/5 + 32 = ${hasil.toFixed(2)}°F`;
    } else {
        hasil = (inputValue - 32) * 5/9;
        detail = `(${inputValue}°F - 32) x 5/9 = ${hasil.toFixed(2)}°C`;
    }

    resultInput.value = hasil.toFixed(2);
    calculateDetail.value = detail;
}

// Function Reset Button
function resetForm(){
    konversiInput.value = '';
    resultInput.value = '';
    calculateDetail.value = '';
} 

// Function Reverse Button
function reverseKonversi(){
    isCelciusToFahrenheit = !isCelciusToFahrenheit;

    //Update label input dan hasil
    const inputLabel = document.querySelector('label[for="konversi-input"]');
    const resultLabel = document.querySelector('label[for="result-input"]');

    if (isCelciusToFahrenheit){
        inputLabel.innerHTML = 'Celcius (&deg;C):';
        resultLabel.innerHTML = 'Fahrenheit (&deg;F):';
    } else {
        inputLabel.innerHTML = 'Fahrenheit (&deg;F):';
        resultLabel.innerHTML = 'Celcius (&deg;C):';
    }

    // Reset inputan setelah direverse
    resetForm();
}

// Event listener button
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const className = e.target.className;

        if (className.includes('konversi')){
            e.preventDefault();
            konversiSuhu();
        } else if (className.includes('reset')){
            e.preventDefault();
            resetForm();
        } else if (className.includes('reverse')){
            e.preventDefault();
            reverseKonversi();
        }
    });
});
