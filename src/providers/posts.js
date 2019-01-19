import {http} from './config'

export default {
    list: () => {return http.get('/posts')},
    single: (id) => {return http.get('/posts/'+id)},
    postsTag: (id) => {return http.get('/posts/tag/'+id)},
    getImage: (filename) => {return http.get('storage/image_post/'+filename)}
}