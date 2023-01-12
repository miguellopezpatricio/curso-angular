import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private authService:AuthService,
              private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      // if(this.authService.auth.id){
      //   return true;

      // }
      // console.log('Bloqueado por AuthGuard - CanActivate')
      // return false
      return this.authService.verificaAuth() 
      .pipe(
        tap((estaAuth) => {
          if(!estaAuth){
            this.router.navigate(['./auth/login'])
          }
        })
      )

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean | UrlTree {


      return this.authService.verificaAuth() 
      .pipe(
        tap((estaAuth) => {
          if(!estaAuth){
            this.router.navigate(['./auth/login'])
          }
        })
      )
      // if(this.authService.auth.id){
      //   return true
      // }
      // console.log('Bloq   // if(this.authService.auth.id){
      //   return true
      // }
      // console.log('Bloqueado por AuthGuard - CanLoad')ueado por AuthGuard - CanLoad')
      // console.log('canLoad', false)
      // console.log(route)
      // console.log(segments)

    // return false;
  }
}
