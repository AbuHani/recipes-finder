import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

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

    handleRequest(request: HttpRequest<any>, next: HttpHandler, i): Observable<HttpEvent<any>> {
        if (i >= environment.spoonacular.keys.length) {
            return throwError('YOU_ARE_NOT_AUTHORIZED');
        }
        return next.handle(
            this.setHeader(
                request,
                environment.spoonacular.keys[i]
            )).pipe(
                catchError((error, caught) => {
                    if (error instanceof HttpErrorResponse && error.status === 401) {
                        return this.handleRequest(request, next, i + 1);
                    }
                    return caught;
                }));
    }

    setHeader(request, apiKey): HttpRequest<any> {
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
