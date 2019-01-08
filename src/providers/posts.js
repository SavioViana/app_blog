import {http} from './config'

export default {
    list: () => {return http.get('/post')},
    single: (id) => {return http.get('/post/'+id)}
}