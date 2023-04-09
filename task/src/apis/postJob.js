import axios from 'axios';
const API_URL   = "https://642dc89f2b883abc6401310a.mockapi.io/api/v1/jobs"

const postJob = async (data) => {
    console.log(data)
  try {
    const response = await axios.post(API_URL, data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default postJob;