import axios from 'axios';
export const signup = async (name, email, password, confirmPassword, phone) => {
  try {
    await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        confirmPassword,
        phone,
      },
    });
    window.setTimeout(() => {
      location.assign('/');
    }, 1500);
  } catch (err) {
    console.error(err.response.data.message);
  }
};
