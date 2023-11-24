import {inject} from '@angular/core';
import {CanMatchFn, Router} from '@angular/router';
import { AuthStore } from './auth.store';
import { first, tap } from 'rxjs/operators';


export const canLoadAuthGuard: CanMatchFn = () =>{
    const router = inject(Router);
    const auth = inject(AuthStore);
    return auth.isLoggedIn$.pipe(first(), 
    tap(loggedIn => loggedIn ? true : router.navigateByUrl('/login')));


}