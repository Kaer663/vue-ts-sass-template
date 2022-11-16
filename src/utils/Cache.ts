class LocalCache {
  store: Storage
  constructor(store: Storage) {
    this.store = store
  }
  setCache(key: string, value: string) {
    this.store.setItem(key, JSON.stringify(value))
  }
  getCache(key: string) {
    const value = this.store.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  deleteCache(key: string) {
    this.store.removeItem(key)
  }
  clearCache() {
    this.store.clear()
  }
}

const localCache = new LocalCache(localStorage)
const sessionCache = new LocalCache(sessionStorage)

export { localCache, sessionCache }

export default localCache
