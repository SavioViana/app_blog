import {http} from './config'

export default {
    list: () => {return http.get('/posts')},
    single: (id) => {return http.get('/posts/'+id)},
    postsTag: (id) => {return http.get('/tags/'+id+'/posts')},
    getImage: (filename) => {return http.get('storage/image_post/'+filename)},
    create: (form) => {
        let formData = new FormData();
        formData.append('title', form.title)
        formData.append('slug', form.slug)
        formData.append('image', form.image)
        formData.append('published', form.published)
        formData.append('body', form.body)
        formData.append('tags', form.tags)

        return new Promise ((res, rej) => {
            http.post('/posts', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": "Bearer " + localStorage.getItem('user-token'),
                    
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