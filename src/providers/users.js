import {http} from './config'

export default {
    getToken: () => {
        if (localStorage.getItem('user-token')) {
            return localStorage.getItem('user-token')
        }
        return false;
    },
    login:(credentials) => {
        return new Promise ((res, rej) => {
            http.post('/login', credentials)
                .then(response => {
                    res(response.data)
                })
                .catch(e => {
                    rej(e)
                })
        })
    },
    register: (credentials) => {

        return new Promise ((res, rej) => {
            http.post('/register', credentials).then(response => {
                res(response.data)
            })
            .catch(e => {
                rej(e)
            })
        })
    },
    logout: () => {
        localStorage.removeItem('user-token');
    },
    authUser: () => {
        return new Promise((res, rej) => {
            http.get('/current_user', {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('user-token')
                }
            }).then(response => {
                res(response.data)
            }).catch(e => {
                rej(e)
            })
        })
    }
}
