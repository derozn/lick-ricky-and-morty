import absoluteUrl from 'next-absolute-url';
import { IncomingMessage } from 'http';
import { request, RequestOptions } from '@/lib/request';
import { config } from '@/config';

const { PORT } = config;

export const requestWithAbsoluteUrl = <T>(
  req: IncomingMessage,
  relativeUrl: string,
  options: RequestOptions = {},
): Promise<T> => {
  const { protocol, host } = absoluteUrl(req, `localhost:${PORT}`);
  const url = `${protocol}//${host}${relativeUrl}`;

  return request<T>(url, options);
};
