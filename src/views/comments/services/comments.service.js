import axios from "axios";

export const CommentService = {
  list: async () => axios.get("comments/").then((res) => res.data),
};
