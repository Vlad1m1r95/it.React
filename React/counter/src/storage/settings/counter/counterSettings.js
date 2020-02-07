import generateKey from '../../../_helpers/generateKey';
import setKeys from '../../../_helpers/setKeys';
import settingsCounters from './settings'

function createCounterSettings(settingsCounters) {
  const keys = generateKey()
  const settings = Object.values(settingsCounters)
  setKeys(settings, keys)
  return settings
}
const counterSettings = createCounterSettings(settingsCounters)

export default counterSettings