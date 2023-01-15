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
})