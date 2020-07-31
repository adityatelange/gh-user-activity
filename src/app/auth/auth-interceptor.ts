import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SetGhPatKeyService } from './../services/set-gh-pat-key.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public SetGhPatKeyService: SetGhPatKeyService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const ghPAT = this.SetGhPatKeyService.get_pat();
    if (ghPAT) {
      const authReq = req.clone({
        headers: req.headers.set(
          'Authorization',
          `token ${ghPAT}`
        ),
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
