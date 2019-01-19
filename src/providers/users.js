import {http} from './config'

export default {
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
    },
    getAcessToken() {
        const userToken = localStorage.getItem("user-token")
    
        if(!userToken){
             return null
        }
        
        return userToken
    }
}
