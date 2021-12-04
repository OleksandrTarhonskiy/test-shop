import { useState, useCallback } from 'react';

import api from 'utils/apiReq';

const useApp = () => {
  const [data, setdata] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async() => {
    try {
      setLoading(true);
      const res = await api.get('/');
      setdata(res.data);
    } catch (e) {
      setError(e.response?.data)
    } finally {
      setLoading(false);
    }
  }, [])

  return {
    data,
    error,
    loading,
    fetchData
  }
};

export default useApp;