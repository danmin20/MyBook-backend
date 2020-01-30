import axios from "axios";
import "../../env";
const URL = "https://openapi.naver.com/v1/search/book.json";
const clientID = process.env.ID;
const clientSecret = process.env.SECRET;

export default {
  Query: {
    getBooks: async (_, { term }) => {
      const {
        data: { items }
      } = await axios.get(URL, {
        params: {
          query: term,
          display: 10
        },
        headers: {
          "X-Naver-Client-Id": clientID,
          "X-Naver-Client-Secret": clientSecret
        }
      });
      return items;
    }
  }
};
