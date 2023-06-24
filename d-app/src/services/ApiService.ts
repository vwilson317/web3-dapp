import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

export default class ApiService {
  protected http: AxiosInstance;

  constructor(baseURL: string) {
    this.http = axios.create({
      baseURL,
    });
  }

  protected handleError(error: AxiosError): Promise<never> {
    // You can customize error handling based on your requirements
    console.error('API Error:', error);
    return Promise.reject(error);
  }

  protected handleResponse<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  protected get<T>(url: string): Promise<T> {
    return this.http
      .get<T>(url)
      .then((response) => this.handleResponse<T>(response))
      .catch((error) => this.handleError(error));
  }

  protected post<T>(url: string, data: any): Promise<T> {
    return this.http
      .post<T>(url, data)
      .then((response) => this.handleResponse<T>(response))
      .catch((error) => this.handleError(error));
  }

  protected put<T>(url: string, data: any): Promise<T> {
    return this.http
      .put<T>(url, data)
      .then((response) => this.handleResponse<T>(response))
      .catch((error) => this.handleError(error));
  }

  protected delete<T>(url: string): Promise<T> {
    return this.http
      .delete<T>(url)
      .then((response) => this.handleResponse<T>(response))
      .catch((error) => this.handleError(error));
  }
}
