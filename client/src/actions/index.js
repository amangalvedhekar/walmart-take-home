import * as api from '../api';
import store from '../store';
import {SORT_OPTIONS,} from '../constants';
import {
  sortByName,
  getCarListWithAvailability,
  availabilitySort,
  deleteAvailabilityProperty,
  nameAndAvailabilitySort,
} from '../utils';

export const requestCarList = () => {
  return dispatch => {
    dispatch({
      type: 'CAR_LIST_REQUESTED',
    });

    return api.fetchCar()
      .then(resp => resp.data)
      .then(data => {
        dispatch({
          type: 'CAR_LIST_RECEIVED',
          payload: data,
        })
      });
  }
};

export const requestCarAvailabilityById = carId => {
  return dispatch => {
    return api
      .fetchCarAvailabilityById(carId)
      .then(resp => resp.data)
      .then(data => {
        dispatch({
          type: 'CAR_AVAILABILITY_RECEIVED',
          payload: data,
        });
      })
  }
};

export const requestCarListAndAvailability = () => {
  return (dispatch, getState) => {
    dispatch(requestCarList())
      .then(() => {
        const carList = getState().cars.cars;
        carList.forEach(car => {
          dispatch(requestCarAvailabilityById(car.id));
        });
      });
  }
};

const sortByNameAndAvailability = (carList, carAvailability) => {
  return getCarListWithAvailability(carList, carAvailability)
    .sort(nameAndAvailabilitySort)
    .map(deleteAvailabilityProperty);
};

const sortByAvailability = (carList, carAvailability) => {
  return getCarListWithAvailability(carList, carAvailability)
    .sort(availabilitySort)
    .map(deleteAvailabilityProperty);
};

export const sortCars = (sortType) => {
  return {
    [SORT_OPTIONS[0]]: store.getState().cars.cars,
    [SORT_OPTIONS[1]]: [...store.getState().cars.cars].sort(sortByName),
    [SORT_OPTIONS[2]]: sortByAvailability(
      [...store.getState().cars.cars],
      store.getState().cars.carAvailability,
    ),
    [SORT_OPTIONS[3]]: sortByNameAndAvailability(
      [...store.getState().cars.cars],
      store.getState().cars.carAvailability,
    )
  }[sortType];

  // if (sortType === SORT_OPTIONS[0]) {
  //   return store.getState().cars.cars;
  // }
  // if (sortType === SORT_OPTIONS[1]) {
  //   return [...store.getState().cars.cars].sort(sortByName);
  // }
  // if (sortType === SORT_OPTIONS[2]) {
  //   return sortByAvailability(
  //     [...store.getState().cars.cars],
  //     store.getState().cars.carAvailability,
  //   );
  // }
  // if(sortType === SORT_OPTIONS[3]) {
  //   return sortByNameAndAvailability(
  //     [...store.getState().cars.cars],
  //     store.getState().cars.carAvailability,
  //   )
  // }
};

export const sortBy = sortType => ({
  type: 'SORT_BY',
  payload: {
    sortType,
    cars: sortCars(sortType),
  },
});
