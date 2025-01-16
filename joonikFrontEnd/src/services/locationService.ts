import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/locations";
const API_KEY = "my-secret-api-key";

export const getLocationServices = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        "api-key": API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching location services:", error);
    throw error;
  }
};
