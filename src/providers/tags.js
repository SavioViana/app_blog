import {http} from './config'

export default {
    list: () => {return http.get('/tag')},
    single: (id) => {return http.get('/tag/'+id)}
}