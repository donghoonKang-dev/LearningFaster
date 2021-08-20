import { createStore } from 'redux';

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const number = document.getElementById('number');

const PLUS = 'PLUS';
const MINUS = 'MINUS';

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case MINUS:
      return count - 1;
    case PLUS:
      return count + 1;
    default:
      return count
  }
}

const countStore = createStore(countModifier);

const countMinus = () => {
  countStore.dispatch({ type: MINUS });
}
const countPlus = () => {
  countStore.dispatch({ type: PLUS });
}
const countChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(countChange);
minus.addEventListener('click', countMinus);
plus.addEventListener('click', countPlus);