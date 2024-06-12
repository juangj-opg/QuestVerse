import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { UrlBuilder } from '../../shared/classes/url-builder';
import { QueryStringParameters } from '../../shared/classes/query-string-parameters';

@Injectable()
// Returns the api endpoints urls to use in services in a consistent way
export class ApiEndpointsService {
  private apiEndpoint: string;
  private apiMockEndpoint: string;

  constructor() {
    this.apiEndpoint = environment.URL_BASE + environment.URL_BACKEND;
    this.apiMockEndpoint = environment.URL_BASE + environment.URL_BACKEND;
  }

  public createUrl(action: string, isMockAPI: boolean = false): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      isMockAPI ? this.apiMockEndpoint : this.apiEndpoint,
      action
    );
    return urlBuilder.toString();
  }

  public createUrlWithQueryParameters(
    action: string,
    queryStringHandler?: (queryStringParameters: QueryStringParameters) => void
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(this.apiEndpoint, action);
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }

  public createUrlWithPathVariables(
    action: string,
    pathVariables: any[] = []
  ): string {
    let encodedPathVariablesUrl: string = '';
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathVariablesUrl += `/${encodeURIComponent(
          pathVariable.toString()
        )}`;
      }
    }
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.apiEndpoint,
      `${action}${encodedPathVariablesUrl}`
    );
    return urlBuilder.toString();
  }
}
