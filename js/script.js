window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items') //получаем все елементы

    function hideTabContent() {
        tabContent.forEach(item => {
            // item.style.display = 'none' //лайнстилем скроем все табы
            item.classList.add('hide')
            item.classList.remove('show', 'fade')
        })

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active') //удаляем класс активности
        })
    }

    function showTabContent(i = 0) { //присваиваение по умолчанию, если функция вызыв-ся без аргумента ему автоматически присваивается 0 значение
        // tabContent[i].style.display = 'block' //показываем ативный таб
        tabContent[i].classList.add('show', 'fade')
        tabContent[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active') //добавляем класс активности
    }


    //вызываем функции
    hideTabContent()
    showTabContent()

    tabsParent.addEventListener('click', (event) => { //доб. обработчик событий на клик
        const target = event.target

        if(target && target.classList.contains('tabheader__item')){ 
            tabs.forEach( (item, i) => { //если эл. котрый находится в псевдомассиве совпадает с эл. который кликнул польз. тогда мы берем его номер и показываем на стр. 
                if( target == item) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })


const deadline = '2023-03-07'

function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds
    const t = Date.parse(endtime) - Date.parse(new Date())

    if(t <= 0) {
        days = 0
        hours = 0
        minutes = 0
        seconds = 0
    }else {
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor((t / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((t / (1000 / 60) % 60)),
        seconds = Math.floor((t / 1000) % 60)
    }

    return {'total': t, days, hours, minutes, seconds}
}

function getZero(num) {
    if(num >=0 && num < 10) {
        return `0${num}`
    }else {
        return num
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000)

updateClock()

function updateClock() {
    const t = getTimeRemaining(endtime)
    days.innerHTML = getZero(t.days)
    hours.innerHTML = getZero(t.hours)
    minutes.innerHTML = getZero(t.minutes)
    seconds.innerHTML = getZero(t.seconds)

        if(t.total <= 0) {
            clearInterval(timeInterval)
        }
    }
}

setClock('.timer', deadline)
})