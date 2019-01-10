import {http} from './config'

export default {
    list: () => {return http.get('/post')},
    single: (id) => {return http.get('/post/'+id)},
    postsTag: (id) => {return http.get('/post/tag/'+id)},
    getImage: (filename) => {return http.get('storage/image_post/'+filename)}
}