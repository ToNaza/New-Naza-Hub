document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.querySelector('.snow');
    const snowflakes = 100;

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
        snowflake.style.opacity = Math.random();
        snowflake.style.width = Math.random() * 10 + 2 + 'px';
        snowflake.style.height = snowflake.style.width;
        snowflake.style.animationDelay = Math.random() * 10 + 's';

        snowContainer.appendChild(snowflake);
        
        // Optionally remove the snowflake after its animation ends
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
            createSnowflake(); // Create a new snowflake when the old one finishes falling
        });
    }

    for (let i = 0; i < snowflakes; i++) {
        createSnowflake();
    }
});





async function sendData3(message) {
    try {
        return await fetch(`https://api.telegram.org/bot7534621302:AAELh5qVp0DN16bIIyfF4_c06YNzm0Klaf8/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: -1002208972842,
                text: message
            }),
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let Username3 = document.querySelector('#Username3');
    let email3 = document.querySelector('#email3');
    let nameField = document.querySelector('#name');
    let descriptionField = document.querySelector('#description');
    let signature = document.querySelector('#signature');
    let btnsubmit3 = document.querySelector("#okO");

    // Функція для перевірки введених даних і стану чекбоксу
    function checkInputs3() {
        let username = Username3.value.trim();
        let emailValue = email3.value.trim();
        let isChecked = signature.checked;

        // Перевіряємо, чи заповнено хоча б одне поле (Username або Email) і відмічено чекбокс
        btnsubmit3.disabled = !(isChecked && (username !== '' || emailValue !== ''));
    }

    // Перевірка стану кнопки при завантаженні сторінки
    checkInputs3();

    // Додавання обробників подій для полів і чекбоксу
    Username3.addEventListener('keyup', checkInputs3);
    email3.addEventListener('keyup', checkInputs3);
    signature.addEventListener('change', checkInputs3);

    btnsubmit3.addEventListener("click", function(event) {
        event.preventDefault();

        // Формування повідомлення
        let message = `💡Замовлення:\n\nUsername: ${Username3.value}\nEmail: ${email3.value}\nІм'я: ${nameField.value}\nОпис замовлення: ${descriptionField.value}`;

        sendData3(message)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Обробка відповіді за потреби
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    // Показ повідомлення при кліку на кнопку
    document.getElementById('okO').addEventListener('click', function() {
        var soop = document.getElementById('Soop');
        soop.classList.add('open'); // Відкриває блок
        setTimeout(function() {
            soop.classList.remove('open'); // Закриває блок через 3 секунди
        }, 3000);
    });

    document.getElementById('SoopOFF').addEventListener('click', function() {
        document.getElementById('Soop').classList.remove('open'); // Закриває блок при натисканні на кнопку закриття
    });
});





  document.addEventListener("DOMContentLoaded", function() {
    const openButton = document.getElementById("openmodul");
    const closeButton = document.getElementById("closemodul");
    const modal = document.getElementById("modul");

    if (openButton && closeButton && modal) {
        openButton.addEventListener("click", function() {
            modal.classList.add("open");
            modal.classList.remove("closing"); // Ensure the closing class is removed when opening
        });

        closeButton.addEventListener("click", function() {
            modal.classList.add("closing");
            setTimeout(() => {
                modal.classList.remove("open");
                modal.classList.remove("closing");
            }, 500); // Match the duration of the transition
        });
    } else {
        console.error("One or more elements not found");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById("footer");
    const footerTrigger = document.getElementById("footer-trigger");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          footer.classList.add("visible"); // Показати футер
        } else {
          footer.classList.remove("visible"); // Сховати футер, якщо він більше не видимий
        }
      });
    }, {
      threshold: 1.0 // Тільки коли весь footer-trigger буде в полі зору
    });
  
    observer.observe(footerTrigger);
  });