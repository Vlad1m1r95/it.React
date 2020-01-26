import Counter from './counter';

const counterController = (config, elem) => {
  const counter = new Counter(config, elem);
  counter.check();
};
export default counterController;
