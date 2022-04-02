const actions = document.querySelector('.modal__actions--desktop'),
contact = document.querySelector('.modal__contact--desktop'),
burger = document.querySelector('.burger-actions');

burger.addEventListener('click', ()=> {
   actions.classList.add('active');
   contact.classList.add("unactive");
   burger.classList.add('unactive');
   document.addEventListener("click", e => {
      let target = e.target;
      let burger = target == actions || actions.contains(target);
      let button = target == burger || document.querySelector('.burger-actions').contains(target);
      if (!burger && !button) {
         actions.classList.remove('active');
         contact.classList.remove("unactive");
         document.querySelector('.burger-actions').classList.remove('unactive');
         e.stopPropagation();
      }
      
   })
});

const buttonBurger = document.querySelector('.header__burger'),
closeMenu = document.querySelector('.modal__cross'),
menu = document.querySelector('.header__modal');

buttonBurger.addEventListener('click', ()=> {
   menu.classList.add('active1');
   buttonBurger.classList.add('unactive');
   document.addEventListener("click", e => {
      let target = e.target;
      let buttonBurger = target == menu || menu.contains(target);
      let button = target == buttonBurger || document.querySelector('.header__burger').contains(target);
      if (!buttonBurger && !button) {
         menu.classList.remove('active1');
         document.querySelector('.header__burger').classList.remove('unactive');
         e.stopPropagation();
      }
   })
   closeMenu.addEventListener('click', ()=>{
      menu.classList.remove('active1');
      document.querySelector('.header__burger').classList.remove('unactive');
      e.stopPropagation();
   })
});

