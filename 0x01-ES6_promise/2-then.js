function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => {
      return new Error();
    })
    .finally(() => {
      // eslint-disable-next-line no-console
      console.log('Got a response from the API');
    });
}

export default handleResponseFromAPI;
