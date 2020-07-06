const _USER_PREFERENCE_KEY = 'userPreference';

/**
 * Stringify user's preference and saves it into cache
 * @param userPreference
 */
export const persistUserPreference = (userPreference) => {
  localStorage.setItem(_USER_PREFERENCE_KEY, JSON.stringify(userPreference));
};

export const getUserPreference = () => {
  return localStorage.getItem(_USER_PREFERENCE_KEY);
};
