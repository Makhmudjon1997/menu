window.addEventListener('DOMContentLoaded', function(){
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsParent = document.querySelector('.tabheader__items');
    const tabContent = document.querySelectorAll('.tabcontent');

    function hideTabContent(){
        tabContent.forEach( item => {
            item.classList.add('none')
            item.classList.remove('show', 'fade')
        })
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active')
        })
    }   
    
    
    function showTabContent(item = 0){
        tabContent[item].classList.add('show', 'fade')
        tabContent[item].classList.remove('none')
        tabs[item].classList.add('tabheader__item_active')
    }

    tabsParent.addEventListener('click', event => {
        if(event.target && event.target.classList.contains('tabheader__item')){
            tabs.forEach((item, index) => {
                if(event.target == item){
                    hideTabContent()
                    showTabContent(index)
                }
            })
        }
    })
    hideTabContent()
    showTabContent()
})