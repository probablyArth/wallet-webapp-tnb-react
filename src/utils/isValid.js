function isValid (key) {
    if (!/^[A-F0-9]+$/i.test(key)) return false
  
    if (key.length !== 64) return false
  
    return true
  }

export default isValid