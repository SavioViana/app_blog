import {http} from './config'

export default {
    list: () => {return http.get('/comments')},
    single: (id) => {return http.get('/comments/'+id)},
    create: (formData) => {
        return new Promise ((res, rej) => {
            http.post('/comments', formData, {
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
            http.put('/comments/'+id, formData, {
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