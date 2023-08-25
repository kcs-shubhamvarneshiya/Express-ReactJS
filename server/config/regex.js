module.exports = {
    NAME: /^[a-zA-Z \.]+$/,
    EMAIL: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
    MOBILE: /^\d{5}([ ']?\d{5})$/,
    PASSWORD: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
}