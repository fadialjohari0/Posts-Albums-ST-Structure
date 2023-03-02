import axios from 'axios';

export const PhotoService = {
  list: async () => axios.get(`photos/`).then(res => res.data),
};
