import mainTemplate from './../template/main.hbs'
import $ from './../helper/getElementBy'
import counter from './counter'
import config from './../state/counterConfig'






const mainTemplateProperty = {
  title: 'Счетчики'
}

const main = (root) => {
  // Выбираем целевой элемент



  const { counter1, counter2 } = config
  root.innerHTML = mainTemplate(mainTemplateProperty)
  counter(counter1)
  counter(counter2)

}
export default main