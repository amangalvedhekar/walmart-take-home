const initialState = {
  cars: [],
  carAvailability: {},
  isLoading: true,
  error: null,
  filters: {
    sortType: '',
  },
};

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case 'CAR_LIST_REQUESTED':
      return {
        ...state,
        isLoading: true,
      };

    case 'CAR_LIST_RECEIVED':
      return {
        ...state,
        cars: action.payload,
        isLoading: false,
      };

    case 'CAR_AVAILABILITY_RECEIVED':
      return {
        ...state,
        carAvailability: {
          ...state.carAvailability,
          [action.payload.id]: action.payload,
        }
      };

    case 'FETCH_CARS_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };

    case 'SORT_BY':
      return {
        ...state,
        sortType: action.payload.sortType,
        cars: action.payload.cars,
      };

    default: {
      return state;
    }
  }
}
