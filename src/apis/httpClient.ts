interface HttpHeaders {
  [headerName: string]: string;
}

interface RequestOptions {
  method: string;
  body: string;
  headers: HttpHeaders;
}

export class HttpClient {
  constructor(private baseURL: string) {}

  public get = async <T>(
    endPoint: string,
    options?: RequestOptions
  ): Promise<T> => {
    const response = await fetch(this.baseURL + endPoint, {
      method: "get",
      ...options,
    });

    if (!response.ok) throw response;

    return (await response.json()) as T;
  };
}
