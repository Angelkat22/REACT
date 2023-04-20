export const users_request = callback => {
    fetch('https://api.escuelajs.co/api/v1/users')
        .then(res => res.json())
        .then(json => callback(json))
}