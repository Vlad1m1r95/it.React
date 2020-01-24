import counterTemplate from './../template/counter.hbs'
import counterController from '../controller/counterTemplate'
import $ from './../helper/getElementBy'
import create from '../helper/createelement'
import State from './../state/state'
import observerCounter from '../state/observerCounter'

let { state } = State

const counterTemplateProperty = {
  dec: '-',
  counter: 0,
  enc: '+',
}

const counter = (config) => {



  const counterBlock = $.id('content_counter_block')
  const block = create('block')
  state++
  block.id = `counter-${state}`
  console.log(block)


  counterBlock.appendChild(block)
  block.innerHTML = counterTemplate(counterTemplateProperty)



  //events
  const elem = {
    blockCounter: $.id(`counter-${state}`),
    dec: $.class('.dec_button'),
    enc: $.class('.inc_button'),
    numb: $.class('.counter_numb'),
  }
  config.state = state
  counterController(config, elem)




}





export default counter