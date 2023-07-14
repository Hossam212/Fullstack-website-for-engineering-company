import axios from 'axios';

export const joinTeam = async (info) => {
  try {
    await axios({
      method: 'POST',
      url: '/api/v1/join-us',
      data: info,
    });
  } catch (err) {
    console.error(err);
  }
};
