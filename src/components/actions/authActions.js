import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setAuthenticated, SET_CURRENT_USER, USER_LOADING } from "./types";
import { GlobalContext } from "../../GlobalProvider";
import Sheet from "../Sheet/Sheet";
export const registerUser = (userData, history) => {
  console.log("yes", history);
  axios
    // .post("http://localhost:5001/api/users/register", userData)
    .post(
      "https://ocean-user-serverbackend.onrender.com/api/users/register",
      userData
    )
    .then((res) => alert("Registered Successfull pls Login"))
    .catch((err) => console.log(err));
};

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};
export const logoutUser = () => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  setCurrentUser({});
};
