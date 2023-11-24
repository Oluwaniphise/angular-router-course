import {inject} from '@angular/core';
import {CanActivateChildFn, CanActivateFn, Router} from '@angular/router';
import { AuthStore } from './auth.store';
import { map } from 'rxjs/operators';
export const AuthGuard: CanActivateFn = () =>{
   
    return checkIfAuthenticated();
}

export const AuthGuardChild: CanActivateChildFn = () =>{ 
    return checkIfAuthenticated();
}


const checkIfAuthenticated = () =>{
    const router = inject(Router);
    const auth = inject(AuthStore);

    return auth.isLoggedIn$.pipe( 
        map(loggedIn => 
            loggedIn ? true : router.parseUrl('/login')
        )
     )
}