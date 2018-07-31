import axios from 'axios'

class Auth {
  constructor () {
    axios.request({
      url: 'http://www.admin.local.vietvodao-bordeaux.fr/oauth/token',
      method: 'post',
      data: {
        grant_type: 'password',
        client_id: '71b1045b-bc43-41ae-9979-896069600e65',
        client_secret: 'vovinam Viet vo dao',
        username: 'vovinam_front',
        password: 'vietvodao_Bordeaux'
      }
    }).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }

  getToken () {
    return ''
  }
}

export default Auth
