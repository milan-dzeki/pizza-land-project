import * as actionTypes from './actionTypes';
import axios from 'axios';

const jobApplySuccess = () => {
  return {
    type: actionTypes.JOB__APPLY__SUCCESS
  };
};

export const jobApply = (info) => {
  return dispatch => {
    axios.post("https://pizza-land-babe6-default-rtdb.firebaseio.com/jobApply.json", info)
      .then(response => {
        console.log(response);
        dispatch(jobApplySuccess());
      })
      .catch(error => {
        console.log(error);
      })
  }
}