import axios from 'axios';
import users from '../../../testData/user';

let host = 'https://server-stage.pasv.us';

export const getUserByEmail = async userEmail => {
  const response = await axios.post(`${host}/user/login`, {
    email: users.admin.email,
    password: users.admin.password,
  });

  let token = response.data.token;

  return axios({
    method: 'get',
    url: `${host}/user/email/${userEmail}`,
    headers: {
      Authorization: token,
    },
  })
    .then(res => res.data)
    .catch(err => err.response.data);
};
