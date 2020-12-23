const fetcher: (url: string) => Promise<any> = async (url: string) => {
  try {
    const result = await fetch(url);
    return await result.json();
  } catch (e) {
    return null;
  }
};

export { fetcher };
