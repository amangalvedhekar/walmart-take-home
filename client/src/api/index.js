import axios from 'axios';

export const fetchCar = () => axios
  .get('/cars');


export const fetchCarAvailabilityById = id => axios
  .get(`/availability?id=${id}`);
