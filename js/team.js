const teamList = document.querySelector('.team__list');


function openItem(button) {
  const contentWrap = button.nextElementSibling;
  const content = contentWrap.firstElementChild;

  const currentHeight = content.offsetHeight;
  contentWrap.style.height = currentHeight + 'px';
  button.classList.add('team__member--active');
}


function closeItem(button) {
  const contentWrap = button.nextElementSibling;
  contentWrap.style.height = 0;
  button.classList.remove('team__member--active');
}



teamList.addEventListener("click", e => {
  e.preventDefault();
  const target = e.target;
  const activeItem = document.querySelector('.team__member--active')

  if(target.classList.contains('team__member')){
    if (target.classList.contains('team__member--active')){
      closeItem(target);
    }
    else{
      openItem(target);
    }
  }

})