import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


export type QueryPayload = {
    [key: string]: string | number | boolean;
};

const getParamsFromQuery = (query: QueryPayload | null | undefined): HttpParams => {
    let params: HttpParams = new HttpParams();

    if (query && typeof query === 'object') {
        Object.keys(query).forEach(key => {
            if (query[key] !== null) {
                params = params.set(key, '' + query[key]);
            }
        });
    }

    return params;
};

@Injectable({
    providedIn: 'root'
})
export class RESTService {
    constructor(private http: HttpClient) { }

    get<T>(url: string, query?: QueryPayload): Observable<T> {
        return this.http.get<T>(url, { params: getParamsFromQuery(query) });
    }
}
