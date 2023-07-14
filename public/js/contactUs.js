import axios from 'axios';

export const sendMessage = async (info) => {
  try {
    await axios({
      method: 'POST',
      url: '/api/v1/contact-us',
      data: info,
    });
  } catch (err) {
    console.error(err);
  }
};
