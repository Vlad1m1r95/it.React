/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
const observerCounter = (mutationsList) => {
  const sumCounter = document.querySelector('#sum_counter');
  for (const mutation of mutationsList) {
    const { target } = mutation;
    const numb = target.querySelector('.counter_numb');
    if (numb) {
      numb.innerHTML = target.getAttribute('data-counter');
    }
    if (sumCounter) {
      sumCounter.innerHTML = sumCounter.getAttribute('data-sumcounter');
    }
  }
};


export default observerCounter;
