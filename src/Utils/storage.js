/**
 * Get storage
 *
 * @param {String} key
 * @returns {*}
 */
const _get = (key) => {
    const value = localStorage.getItem(key);

    try {
        return JSON.parse(value);
    } catch (e) {
        return value;
    }
};
/**
 * Set storage
 * @param {String} key
 * @param {*} value
 */
const _set = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Remove storage
 *
 * @param {String} key
 */
const _remove = (key) => {
    localStorage.removeItem(key);
};


export default {
    set(key, value) {
        _set(key, value);
    },

    get(key) {
        return _get(key);
    },

    remove(key) {
        _remove(key);
    },
};
