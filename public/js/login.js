import axios from 'axios';
export const login = async (email, password) => {
  try {
    await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    window.setTimeout(() => {
      location.assign('/');
    }, 1500);
  } catch (err) {
    console.error(err.response.data.message);
  }
};
