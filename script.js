function checkAnswer() {
    // Отримуємо вибране значення з випадаючого списку
    const answerSelect = document.getElementById('answer-select');
    const selectedValue = answerSelect.value;
    
    // Отримуємо елемент для відображення результату
    const resultDiv = document.getElementById('result');
    
    // Перевіряємо, чи вибране значення є правильним
    if (selectedValue === "60") {
        resultDiv.textContent = "Правильно! В годині 60 хвилин.";
        resultDiv.style.color = "green";
    } else if (selectedValue === "") {
        resultDiv.textContent = "Будь ласка, оберіть відповідь.";
        resultDiv.style.color = "red";
    } else {
        resultDiv.textContent = "Неправильно. Спробуйте ще раз.";
        resultDiv.style.color = "red";
    }
}