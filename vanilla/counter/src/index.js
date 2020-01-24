import './sass/index.sass'
import $ from './helper/getElementBy'
import main from './view/main'
import observerCounter from './state/observerCounter'


const root = $.id('root')

window.onload = () => {
  main(root)
  // Конфигурация observer (за какими изменениями наблюдать)
  const setting = {
    attributes: true,
    childList: true,
    subtree: true
  }


  const observer = new MutationObserver(observerCounter)
  const target = $.id(`content_counter_block`)
  observer.observe(target, setting)
}
// window.onload = () => { console.log('a') }


