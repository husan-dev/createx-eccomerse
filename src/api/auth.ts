import { ISignUp } from "@typess/auth";
import api from "./axios";

export const signIn = async (identifier: string, password: string) => {
  try {
    const response = await api.post(
      "api/auth/local",
      { identifier, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
export const signUp = async (props: ISignUp) => {
  try {
    const response = await api.post("api/auth/local/register", {
      username: props.username,
      email: props.email,
      password: props.password,
    });
    return response.data;
  } catch (error) {
    console.error("Sign up failed:", error);
    throw error;
  }
};
