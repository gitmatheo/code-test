export const normalizeQueryParams = (options: any) => {
  let queryParams = '';

  for (const queryName in options) {
    const value = options[queryName];
    if (value !== '' && value !== null && value !== undefined) {
      const querySeparator = queryParams.length > 0 ? '&' : '?';
      queryParams += `${querySeparator}${queryName}=${value}`;
    }
  }

  return queryParams;
};
