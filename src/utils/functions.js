import jwt_decode from "jwt-decode";

export const getUserRoleFromToken = token => {
    return jwt_decode(token).data.authData.role
}

export const getUserIDFromToken = token => {
    return jwt_decode(token).data.userData.id
}

export const getToken = () => {
    return localStorage.getItem("token");
  };
  