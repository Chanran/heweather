import store from 'store'

export function setStorage (key, value) {
  return store.set(key, value)
}

export function getStorage (key) {
  return store.get(key)
}

export function removeStorage (key) {
  return store.remove(key)
}

export function clearStorage () {
  return store.clearAll()
}
