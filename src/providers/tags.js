import {http} from './config'

export default {
    list: () => {return http.get('/tags')},
    single: (id) => {return http.get('/tags/'+id)},
    create: (formData) => {
        return new Promise ((res, rej) => {
            http.post('/tags', formData, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('user-token')
                }
            }).then(response => {
                res(response.data)
            })
            .catch(e => {
                rej(e)
            })
        })
    },
    update: (id, formData) => {
        return new Promise ((res, rej) => {
            http.put('/tags/'+id, formData, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('user-token')
                }
            }).then(response => {
                res(response.data)
            })
            .catch(e => {
                rej(e)
            })
        })
    },
}