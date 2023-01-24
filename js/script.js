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
    //Modal

const modalTrigger = document.querySelectorAll('[data-modal]'),
modal = document.querySelector('.modal'),
modalCloseBtn = document.querySelector('[data-close]')

function openModal() {
modal.classList.add('show')
modal.classList.remove('hide')
document.body.style.overflow = 'hidden'
clearInterval(modalTimerId)
}

modalTrigger.forEach(btn => {
btn.addEventListener('click', openModal)
})

function closeModal() {
modal.classList.add('hide')
modal.classList.remove('show')
document.body.style.overflow = ''
}

modalCloseBtn.addEventListener('click', closeModal)

modal.addEventListener('click', (e) => {
if (e.target === modal) {
  closeModal()
}
})

document.addEventListener('keydown', (e) => {
if(e.code === "Escape" && modal.classList.contains('show')) {
  closeModal()
}
})

const modalTimerId = setTimeout(openModal, 5000)

function endOfPage() {
if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
  openModal()
}
window.removeEventListener('scroll', endOfPage)
} 

window.addEventListener('scroll', endOfPage)
})