import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const id_token = localStorage.getItem('id_token');
    if (id_token) {
      return next.handle(req);
    }else {
      console.log('Intercepted!!!');
    }
  }

  
}
