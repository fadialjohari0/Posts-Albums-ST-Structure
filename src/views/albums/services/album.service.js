import axios from 'axios';

export const AlbumService = {
  list: async () => axios.get(`albums/`).then(res => res.data),
};
