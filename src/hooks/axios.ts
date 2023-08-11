import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface ApiResponse<T> {
  results: any;
  next: string | null;
  previous: string | null;
}

function useCallAxios<T>(initialUrl: string) {
  const [data, setData] = useState<any>([]);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
  const [prevPageUrl, setPrevPageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const fetchData = async (url: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response: AxiosResponse<ApiResponse<T>> = await axios.get(url);
      setData(response.data);
      setNextPageUrl(response.data.next);
      setPrevPageUrl(response.data.previous);
    } catch (err) {
      setError(err);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(initialUrl);
  }, [initialUrl]);

  const gotoNextPage = () => {
    if (nextPageUrl) {
      fetchData(nextPageUrl);
    }
  };

  const gotoPrevPage = () => {
    if (prevPageUrl) {
      fetchData(prevPageUrl);
    }
  };

  return {
    data,
    isLoading,
    error,
    gotoNextPage,
    gotoPrevPage,
  };
}

export default useCallAxios;
