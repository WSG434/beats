// const teamList = document.querySelector('.team__list');


// function openItem(button) {
//   const contentWrap = button.nextElementSibling;
//   const content = contentWrap.firstElementChild;

//   const currentHeight = content.offsetHeight;
//   contentWrap.style.height = currentHeight + 'px';
//   button.classList.add('team__member--active');
// }


// function closeItem(button) {
//   const contentWrap = button.nextElementSibling;
//   contentWrap.style.height = 0;
//   button.classList.remove('team__member--active');
// }



// teamList.addEventListener("click", e => {
//   e.preventDefault();
//   const target = e.target;
//   const activeItem = document.querySelector('.team__member--active')

//   if(target.classList.contains('team__member')){
//     if (target.classList.contains('team__member--active')){
//       closeItem(target);
//     }
//     else{
//       openItem(target);
//     }
//   }

// })


const openItem = item => {
  const container = item.closest(".team__item");
  const contentBlock = container.find(".team__desc");
  const textBlock = container.find(".team__content");
  const reqHeight = textBlock.height();

  container.addClass("active")
  contentBlock.height(reqHeight);

}

const closeEveryItem = container => {
  const items = container.find('.team__desc');
  const itemContainer = container.find(".team__item");

  itemContainer.removeClass("active");
  items.height(0);
}

$('.team__member').click(e => {
  const $this = $(e.currentTarget);
  const container = $this.closest('.team');
  const elemContainer = $this.closest(".team__item");

  if (elemContainer.hasClass("active")) {
    closeEveryItem(container);
  } else {
    closeEveryItem(container);
    openItem($this);
  }

  

})

