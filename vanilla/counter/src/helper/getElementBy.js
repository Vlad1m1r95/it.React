const $ = {
  id: (id) => document.getElementById(id),
  class: (className) => document.querySelector(className),
  classAll: (className) => [...document.querySelectorAll(className)],
};

export default $;
