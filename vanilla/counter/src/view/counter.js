import counterTemplate from '../template/counter.hbs';
import $ from '../helper/getElementBy';
import create from '../helper/createelement';
import State from '../state/state';
import Counter from '../controller/counter';

let { state } = State;

const counterTemplateProperty = {
  dec: '-',
  counter: 0,
  enc: '+',
};

const counter = (config) => {
  const counterBlock = $.id('content_counter_block');
  const block = create('block');
  state += 1;
  block.id = `counter-${state}`;
  counterBlock.appendChild(block);
  block.innerHTML = counterTemplate(counterTemplateProperty);
  // events
  const elem = {
    blockCounter: $.id(`counter-${state}`),
    dec: $.class('.dec_button'),
    enc: $.class('.inc_button'),
    numb: $.class('.counter_numb'),
    mainCounter: $.id('sum_counter'),
  };
  const newCounter = new Counter(config, elem);
  newCounter.check();
};


export default counter;
