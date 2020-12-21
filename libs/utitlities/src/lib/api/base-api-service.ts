/* Create a base API to generate a static request */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export abstract class BaseApiService {
  protected cache: Record<string, any> = {};
  protected http: AxiosInstance;
  constructor(
    protected baseApiUrl: string,
    protected apiNamespace: string,
    protected endpoint: string
  ) {
    this.http = axios.create({
      baseURL: this.relativeUrl,
      //   headers:{

      //   }
    });
  }

  public get apiUrl(): string {
    let url = !this.baseApiUrl.endsWith("/")
      ? `${this.baseApiUrl}/`
      : this.baseApiUrl;
    url += this.apiNamespace.startsWith("/")
      ? this.apiNamespace.substring(1)
      : this.apiNamespace;

    return url;
  }

  public get relativeUrl(): string {
    const relUrl = !this.apiUrl.endsWith("/")
      ? `${this.apiUrl}/${this.endpoint}`
      : this.apiUrl + this.endpoint;
    return relUrl;
  }

  public delete<T = any>(id: string | number, options?: AxiosRequestConfig) {
    const url = this.relativeUrl + id;

    return this.http.delete(url, options);
  }

  //   public get<T = any>(
  //     id: string | number = "",
  //     updateCache: boolean = false,
  //     options?: AxiosRequestConfig
  //   ) {
  //     const url = id ? this.relativeUrl + id : this.relativeUrl;
  //     if (!this.cache[url] || updateCache) {
  //       this.cache[url] = this.http.get<T>(url, options).pipe(shareReplay(1));
  //     }

  //     return this.cache[url];
  //   }

  public patch<T = any>(
    id: string | number,
    body: any | null,
    options?: AxiosRequestConfig
  ) {
    const url = this.relativeUrl + id;
    return this.http.patch<T>(url, JSON.stringify(body), options);
  }

  public post<T = any>(
    id: string | number,
    body: any | null,
    options?: AxiosRequestConfig
  ) {
    const url =
      typeof id === "number" || (typeof id === "string" && id)
        ? this.relativeUrl + id
        : this.relativeUrl;

    return this.http.post<T>(url, JSON.stringify(body), options);
  }

  public put<T = any>(
    id: string | number,
    body: any | null,
    options?: AxiosRequestConfig
  ) {
    const url = this.relativeUrl + id;
    return this.http.put<T>(url, JSON.stringify(body), options);
  }
}
