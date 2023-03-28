const reviewsSwitcher = document.querySelector('#reviewsSwitcher');

// функиця показа нужного отзыва по имени
const findReview = (reviewId) => {
  // находим текущий отображаемый отзыв (у него должен быть активный класс)
  const activeReview = document.querySelector(".review--active");
  // снимаем с текущего отображаемого отзыва активный класс
  activeReview.classList.remove("review--active");
  // находим нужный отзыв по имени (по селектору дата атрибута)
  const currentReview = document.querySelector(`.review[data-item="${reviewId}"]`);
  // и ставим на него активный класс (фактически показываем нужный отзыв)
  currentReview.classList.add("review--active");
};
// при кликах на список аватарок
reviewsSwitcher.addEventListener("click", (e) => {
  e.preventDefault();
  // находим по какому именно элементу кликнули
  const target = e.target;
  // если кликнули на картинку
  if (target.classList.contains('interactive-avatar__img')) {
    // ищем текущую активную аватарку
    const activeListItem = document.querySelector('.reviews__switcher-item--active');
    // если нашли
    if (activeListItem) {
      // убираем с неё активный класс (зеленую рамку)
      activeListItem.classList.remove('reviews__switcher-item--active');
    }
    // у картинки есть родитель - кнопка
    const button = target.parentElement;
    // а у кнопки есть родитель <li>
    const listElement = button.parentElement;
    // берем у кнопки имя нужного для показа отзыва
    const id = button.getAttribute('data-open');
    // с <li> снимаем активный класс 
    listElement.classList.add('reviews__switcher-item--active');
    // запускаем функцию показа отзыва и передаем полученное с кнопки имя отзыва 
    findReview(id);
  }
});

