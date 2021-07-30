// slider1.start()
var myButton = document.querySelector('#button')
var myInput = document.querySelector('#input')
var randomFrases = ['Подумай Еще', 'Еще не Время', 'Ты думаешь это того стоит ?', 'Определённо', 'Вернись к этому Вопросу завтра!', 'Несомненно', 'Подумай над эти еще!', 'Обдумай Это лучше', 'Делай не Задумываясь!', 'Поверь в Себя и Делай', 'Не спрашивай меня а делай!']
myButton.disabled = true





myInput.addEventListener('keyup', inputListenerforQuestion)
myButton.addEventListener('click', prediction)

function inputListenerforQuestion() {
if (myInput.value.slice(0, 7) != 'Вопрос:') {
    myButton.disabled = true
     alert('Это Слово нельзя Было Трогать ! Перезагрузи Страничку ! ')
} else { myButton.disabled = false }
}


function prediction() { 
    if (myInput.value.slice(-1) != '?') {
        alert('ЕЙ! А где знак вопроса ?')
    } else {
        alert(randomFrases[Math.floor(Math.random() * 11)])
    } }


