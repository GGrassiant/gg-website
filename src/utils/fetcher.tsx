const fetcher = (url: string): Promise<any> =>
  fetch(url).then((res) => {
    if (res.status >= 400 && res.status <= 499) {
      throw new Error('API Client Error');
    }
    return res.json();
  });

export { fetcher };
