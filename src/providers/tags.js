import {http} from './config'

export default {
    list: () => {return http.get('/tags')},
    single: (id) => {return http.get('/tags/'+id)}
}