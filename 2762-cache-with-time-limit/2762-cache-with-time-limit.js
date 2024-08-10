var TimeLimitedCache = function() {
    this.cache = new Map(); // To store key-value pairs and their expiration times
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const now = Date.now();
    const expirationTime = now + duration;
    
    // Check if the key already exists and is still valid
    const exists = this.cache.has(key) && this.cache.get(key).expirationTime > now;
    
    // Set or overwrite the key with new value and expiration
    this.cache.set(key, { value, expirationTime });
    
    // Return true if the key existed and was overwritten, false otherwise
    return exists;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const now = Date.now();
    const item = this.cache.get(key);
    
    if (item && item.expirationTime > now) {
        return item.value;
    }
    
    // Remove expired or non-existent key
    this.cache.delete(key);
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const now = Date.now();
    let count = 0;
    
    for (const [key, item] of this.cache.entries()) {
        if (item.expirationTime > now) {
            count++;
        } else {
            // Clean up expired keys
            this.cache.delete(key);
        }
    }
    
    return count;
};
