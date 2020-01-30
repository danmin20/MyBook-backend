import axios from "axios";
import { ID, SECRET } from "../key";
const URL = "https://openapi.naver.com/v1/search/book.json";
const clientID = ID
const clientSecret = SECRET;

export const getBooks = async term => {
  const {
    data: {
      data: { books }
    }
  } = await axios(URL, {
    params: {
      d_titl: term,
      display: 10
    },
    headers: {
      "X-Naver-Client-Id": clientID,
      "X-Naver-Client-Secret": clientSecret
    }
  });
  return books;
};

export const getBook = async title => {
  const {
    data: {
      data: { book }
    }
  } = await axios(URL, {
    params: {
      d_titl: title
    },
    headers: {
      "X-Naver-Client-Id": clientID,
      "X-Naver-Client-Secret": clientSecret
    }
  });
  return book;
};
