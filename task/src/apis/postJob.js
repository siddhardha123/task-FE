import axios from 'axios';

const postJob = async (data) => {
    console.log(data)
  try {
    const response = await axios.post('https://642dc89f2b883abc6401310a.mockapi.io/api/v1/jobs', data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default postJob;