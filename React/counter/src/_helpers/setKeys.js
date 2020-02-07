function setKeys(settings, keys) {
  settings.forEach((setting, index) => {
    let key = 'key'
    setting[key] = keys[index]
  });
}

export default setKeys