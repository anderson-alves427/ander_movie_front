import { HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('@token');

    if (token) {
      const authReq = req.clone({
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`
        })
      });
      return next.handle(authReq);
    }

    return next.handle(req);
  }
}


