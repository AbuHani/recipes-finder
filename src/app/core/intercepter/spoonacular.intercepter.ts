import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable()
export class SpoonacularHttpClient implements HttpInterceptor {

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (request.url.startsWith(environment.spoonacular.baseUrl)) {
            request = request.clone({
                setHeaders: {
                    accept: `application/json`,
                    'content-type': `application/json`
                },
                params: request.params.append(
                    'apiKey', environment.spoonacular.apiKey
                ),
            });
        }
        return next.handle(request);
    }
}
