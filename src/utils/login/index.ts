import { uri } from "../../constance/uri";
import { request } from "../axios"

interface TokenType {
  access_token: string,
  refresh_token: string,
}

export const login = async (code:string) => {
    try {
      const response = await request.post<TokenType>(uri.login, code);
      return response;
    } catch(error) {
      return Promise.reject(error);
    }
}