import mainTemplate from '../template/main.hbs';
import counter from './counter';
import config from '../state/counterConfig';

const mainTemplateProperty = {
  title: 'Сумма :',
  counter: 0,
};
const main = (root) => {
  const {
    counter1,
    counter2,
    counter3,
  } = config;
  const parent = root;
  parent.innerHTML = mainTemplate(mainTemplateProperty);
  counter(counter1);
  counter(counter2);
  counter(counter3);
};
export default main;
