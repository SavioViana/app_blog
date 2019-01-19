import {http} from './config'

export default {
    list: () => {return http.get('/posts')},
    single: (id) => {return http.get('/posts/'+id)},
    postsTag: (id) => {return http.get('/posts/tag/'+id)},
    getImage: (filename) => {return http.get('storage/image_post/'+filename)},
    create: (formData) => {
        return new Promise ((res, rej) => {
            http.post('/posts', formData, {
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
            http.put('/posts/'+id, formData, {
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