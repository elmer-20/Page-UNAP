document.addEventListener('DOMContentLoaded', function () {
    // Define la fecha y hora objetivo
    const targetDate = new Date("January 27, 2024 06:00:00").getTime();

    // Actualiza la cuenta regresiva cada segundo
    const countdownInterval = setInterval(function () {
        // Obtiene la fecha y hora actual
        const currentDate = new Date().getTime();

        // Calcula la diferencia entre la fecha objetivo y la fecha actual
        const difference = targetDate - currentDate;

        // Calcula días, horas, minutos y segundos
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Formatea y actualiza el contenido HTML con la cuenta regresiva
        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Si la cuenta regresiva ha terminado, detén la actualización
        if (difference < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = '¡Ya ha llegado!';
        }
    }, 1000);
});
