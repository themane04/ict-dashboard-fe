import {inject} from '@angular/core';
import {HttpInterceptorFn} from '@angular/common/http';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {setUser, user} from "../signals/auth.signal";
import {environment} from "../../../core/consts/environment";

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
    return next(req).pipe(
        tap({
            error: (err) => {
                if (err.status === 401 && user()) {
                    setUser(null);
                    void inject(Router).navigate([environment.frontendUrls.signin]);
                }
            }
        })
    );
};
