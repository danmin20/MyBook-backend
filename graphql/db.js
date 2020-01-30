import axios from "axios";
import { ID, SECRET } from "../key/key";
const URL = "https://openapi.naver.com/v1/search/book.json";
const clientID = ID;
const clientSecret = SECRET;

export const getBooks = async term => {
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
};

export const getBook = async id => {
  const {
    data: { items }
  } = await axios.get(URL, {
    params: {
      query: id
    },
    headers: {
      "X-Naver-Client-Id": clientID,
      "X-Naver-Client-Secret": clientSecret
    }
  });
  return items[0];
};
