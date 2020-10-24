/**
 * @author @Abdelrahman
 * @classdesc   Spoonacular Http interceptor
 */
// ANGULAR MODULES
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// ENVIRONMENTS
import { environment } from '@rf/environment';

@Injectable()
export class SpoonacularHttpClient implements HttpInterceptor {

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (request.url.startsWith(environment.spoonacular.baseUrl)) {
            return this.handleRequest(request, next, 0);
        }
        return next.handle(request);
    }

    /**
     * @desc    Handle http request, Header, params and multiple apiKeys
     * @params  {HttpRequest<any>} request
     * @params  {HttpHandler} next
     * @params  {number} i
     *
     * @returns Observable
     */
    handleRequest(request: HttpRequest<any>, next: HttpHandler, i: number): Observable<HttpEvent<any>> {
        if (i >= environment.spoonacular.keys.length) {
            return throwError('YOU_ARE_NOT_AUTHORIZED');
        }
        return next.handle(
            this.setHeader(
                request,
                environment.spoonacular.keys[i]
            )).pipe(
                catchError((error, caught) => {
                    if (error instanceof HttpErrorResponse &&
                        [402, 401].indexOf(error.status) !== -1) {
                        return this.handleRequest(request, next, i + 1);
                    }
                    return throwError(error);
                }));
    }

    /**
     * @desc    Set http header and params
     * @params  {HttpRequest<any>} request
     * @params  {string} apiKey
     *
     * @returns HttpRequest
     */
    setHeader(request: HttpRequest<any>, apiKey: string): HttpRequest<any> {
        return request.clone({
            setHeaders: {
                accept: `application/json`,
                'content-type': `application/json`
            },
            params: request.params.set(
                'apiKey', apiKey
            ),
        });
    }
}
