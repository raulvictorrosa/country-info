export const countriesReducer = (state: any = [], action: any) => {
  switch (action.type) {
    case 'FETCH_COUNTRIES':
      return {
        ...state,
        countries: action.countries,
      };

    default:
      throw new Error('Unexpected action');
  }
};
