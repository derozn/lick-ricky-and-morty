import { stringify, StringifiableRecord } from 'query-string';

const parseResponse = async (response: Response): Promise<any | string> => {
  const contentType = response.headers.get('content-type');

  if (contentType && contentType.includes('application/json')) {
    return response.json();
  }

  return response.text();
};

const verifyResponse = async (response: Response): Promise<Response> => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
};

const createUrl = (url: string, query: StringifiableRecord | undefined): string =>
  query ? `${url}?${stringify(query)}` : url;

export type RequestOptions = RequestInit & {
  query?: StringifiableRecord;
};

export const request = async <T>(url: string, options: RequestOptions = {}): Promise<T> => {
  const { query, ...requestOptions } = options;

  const formattedUrl = createUrl(url, query);

  const response = await fetch(formattedUrl, requestOptions);
  const verifiedResponse = await verifyResponse(response);
  const parsedResponse = await parseResponse(verifiedResponse);

  return parsedResponse as T;
};
