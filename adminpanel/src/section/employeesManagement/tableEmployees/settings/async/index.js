import Api from '../../../../../api/api'

export async function getFetchEmployees(
  setNewStore,
  { setLoading, setUpdateFlag, setError }
) {
  try {
    const response = await Api.getEmployees()
    const json = await response.json()
    setNewStore(json)
  } catch (e) {
    setError(e.message || 'Unexpected error')
  }
  setLoading(false)
  setUpdateFlag(false)
}

export async function deleteFetchEmployee({
  id,
  setLoading,
  setUpdateFlag,
  setError,
}) {
  try {
    setLoading(true)
    await Api.deleteEmployee(id)
    setUpdateFlag(true)
  } catch (e) {
    setError(e.message || 'Unexpected error')
  }
}

export async function editFetchEmployee(
  setNewStore,
  { employee, setLoading, setUpdateFlag, setError }
) {
  try {
    setLoading(true)
    const response = await Api.editEmployee(employee)
    const json = await response.json()
    setNewStore(json)
    setUpdateFlag(true)
  } catch (e) {
    setError(e.message || 'Unexpected error')
  }
}
