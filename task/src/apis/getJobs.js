import axios from 'axios';
const API_URL   = "https://642dc89f2b883abc6401310a.mockapi.io/api/v1/jobs"
const getJobs = async (data) => {
  try {
    const response = await axios.get(API_URL);
    // console.log(response.data);
    return response.data
  } catch (error) {
    console.error(error);
  }
};

export default getJobs;