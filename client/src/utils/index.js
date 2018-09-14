import {availability} from '../constants';

export const sortByName =
  (elementOne, elementTwo) =>
    elementOne.name
      .localeCompare(elementTwo.name);

export const getCarListWithAvailability = (carList, carAvailability) => carList
  .map(carObject => Object
    .assign(
      { availability: availability[carAvailability[carObject.id].availability] },
      carObject,
      {}
    )
  );

export const availabilitySort =
  (firstElement, secondElement) =>
    firstElement.availability - secondElement.availability;

export const deleteAvailabilityProperty = car => {
  const { availability, ...carObject } = car;
  return carObject;
};

export const nameAndAvailabilitySort =
  (elementOne, elementTwo) => {
    if (elementOne.availability === elementTwo.availability) {
      return elementOne.name.localeCompare(elementTwo.name)
    }
    return elementOne.availability - elementTwo.availability;
  };
