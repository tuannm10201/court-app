import { Location } from '../data/types/otherTypes';
import apiSlice from '../store/apiSlice';

export default apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLocationSuggestions: builder.query<Location[], string>({
      query: (query) =>
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          query
        )}&format=json&addressdetails=1&limit=5`,
    }),
    getLocationFromCoordinates: builder.query<Location, { lat: number; lon: number }>({
      query: ({ lat, lon }) =>
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
    }),
  }),
});
