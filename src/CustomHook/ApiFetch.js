// useApi.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { frontPageApi } from '../Utils/Assets';

const ApiFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    console.log("hello")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(frontPageApi);
        setData(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default ApiFetch;
