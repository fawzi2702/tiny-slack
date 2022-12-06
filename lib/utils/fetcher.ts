export const fetcher = (input: RequestInfo, init?: RequestInit) =>
  fetch(input, init).then((response) => response.json())
