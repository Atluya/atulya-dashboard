import jwt_decode from "jwt-decode";

export const getUserRoleFromToken = token => {
    return jwt_decode(token).data.authData.role
}

export const getToken = () => {
    return localStorage.getItem("token");
  };
  