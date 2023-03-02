import axios from "axios";

export const PostService = {
  list: async () => axios.get(`posts/`).then((res) => res.data),
};
