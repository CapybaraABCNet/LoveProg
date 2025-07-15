const quotes = [
    '"Программирование — это искусство, требующее творчества и логики." - Неизвестный',
    '"Программирование — это процесс, в котором ты учишься на своих ошибках." - Неизвестный',
    '"Код — это поэзия." - Неизвестный',
    '"Программисты — это люди, которые решают проблемы, о которых вы даже не подозревали." - Неизвестный',
    '"Хакеры — это люди, которые делают невозможное возможным." - Неизвестный',
    '"Программирование — это как искусство, которое создает реальность." - Неизвестный',
    '"Настоящий хакер не взламывает системы, он создает их." - Неизвестный',
    '"В каждом коде есть возможность изменить мир." - Неизвестный',
];

document.getElementById('newQuoteBtn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteBlock').innerText = quotes[randomIndex];
});

function button() {
    const num0 = Number(document.getElementById("num0").value);
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const num3 = Number(document.getElementById("num3").value);
    const num4 = Number(document.getElementById("num4").value);
    const num5 = Number(document.getElementById("num5").value);
    const num6 = Number(document.getElementById("num6").value);
    const num = num0 + num1 + num2 + num3 + num4 + num5 + num6;
    alert('Вы программировали на этой неделе ' + num + ' часов');

}