import {http} from './config'

export default {
    getToken: () => {
        if (localStorage.getItem('user-token')) {
            return localStorage.getItem('user-token')
        }

        return false;
    },
 
    
}
/*
export const getUsersDetails=()=>{
    console.log('calling');
    return (dispatch) => {
      return axios.get('http://localhost:3030/users',{headers: { "Authorization": localStorage.getItem('jwtToken') }}).then((data)=>{
                   console.log('data comming',data);
                  dispatch(getUsersData(data));
              }).catch((error)=>{
                console.log('error comming',error);
                  dispatch(errorgetUsersData(error));
              });
          };
  }

  */