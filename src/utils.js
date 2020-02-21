import "./env";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import jwt from "jsonwebtoken";

export const generateSecret = () => {
  const num = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
  return num.toString();
};

const sendMail = email => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: "mybook@gmail.com",
    to: address,
    subject: "Login Secret for Mybook!",
    html: `Hello! Your login secret is <strong>${secret}</strong>.<br/>위의 다섯 자리 숫자를 입력해주세요.`
  };
  return sendMail(email);
};

export const generateToken = id => jwt.sign({ id }, process.env.JWT_SECRET);
