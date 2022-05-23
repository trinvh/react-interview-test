import React from "react";


const useFetch = <T extends any>(url: string, options?: RequestInit) => {
  const [response, setResponse] = React.useState<T>();
  const [error, setError] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(false)

  const fetchData = React.useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(url, options);
      setResponse(await response.json());
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false)
    }
  }, [url, options]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { response, error, loading }
}

export default useFetch