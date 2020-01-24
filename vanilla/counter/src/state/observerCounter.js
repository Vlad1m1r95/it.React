const observerCounter = function (mutationsList) {
  for (let mutation of mutationsList) {
    const { target } = mutation
    const numb = target.querySelector('.counter_numb')
    if (numb) {
      numb.innerHTML = target.getAttribute('data-counter')
    }
  }
}




export default observerCounter

