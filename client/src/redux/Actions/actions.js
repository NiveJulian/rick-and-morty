import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addFav = (char) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      let response = await axios.post(endpoint, char);
      return dispatch({
        type: ADD_FAV,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      let response = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
  

export const filterCards = (gender) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";

  return async (dispatch, getState) => {
    try {
      let response = await axios.post(endpoint, gender);
      const { data } = response;
      let filteredData;
      if (gender === "all") {
        filteredData = data; // Mostrar todos los personajes
        console.log(filteredData);
      } else {
        filteredData = data.filter((char) => char.gender === gender);
        console.log(filteredData);
      }

      // Despachamos la acción FILTER con los datos filtrados
      dispatch({
        type: FILTER,
        payload: filteredData,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};
