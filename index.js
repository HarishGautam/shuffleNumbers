{
  const matrixWrapper = document.querySelector('.matrix-wrapper');
  const matrixContainer = matrixWrapper.querySelector('.matrix-container');
  let liItems;
  const shuffleBtn = matrixWrapper.querySelector('.shuffle');
  const sortBtn = matrixWrapper.querySelector('.sort');
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let init = () => {
    var fragment = document.createDocumentFragment();
    for (let i = 0; i < arr.length; i++) {
      let li = document.createElement('li');
      li.innerHTML = arr[i];
      fragment.appendChild(li);
    }
    matrixContainer.appendChild(fragment);
    liItems = matrixContainer.querySelectorAll('li');
  }
  
  const realignItems = () => {
    for (let i = 0; i < liItems.length; i++) {
      liItems[i].innerHTML = arr[i];
    }
  }
  shuffleBtn.addEventListener('click', () => {
    arr.sort(() => 0.5 - Math.random());
    realignItems();
  });
  sortBtn.addEventListener('click', () => {
    arr.sort();
    realignItems();
  })
  
  init();
}