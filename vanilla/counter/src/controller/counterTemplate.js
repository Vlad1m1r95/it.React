import $ from '../helper/getElementBy'
import Counter from './counter'
import State from '../state/state'


const counterController = (config, elem) => {
  const counter = new Counter(config, elem)
  counter.check()
}




export default counterController