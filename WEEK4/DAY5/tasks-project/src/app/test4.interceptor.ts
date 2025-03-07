import { HttpInterceptorFn } from '@angular/common/http';

export const test4Interceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
