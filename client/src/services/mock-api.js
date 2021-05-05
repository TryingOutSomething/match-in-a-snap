import mockRestaurants from '@/assets/restaurants.json';

export const FETCH_RESTAURANTS = () => {
  return new Promise((resolve, reject) => {
                       setTimeout(() => {
                         const result = fetchIsSuccessful();

                         if (result) {
                           resolve([...mockRestaurants]);
                         } else {
                           reject('Unable to fetch data due to server error');
                         }
                       }, 500);
                     }
  );
};

const fetchIsSuccessful = () => {
  const result = Math.random() * 100;
  const SUCCESS_THRESHOLD = 10;

  return result >= SUCCESS_THRESHOLD;
};
