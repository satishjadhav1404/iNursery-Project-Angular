import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AdminService } from './Services/admin.service';

export const authGuard: CanActivateFn = (route, state) => {

  const admin = inject(AdminService)
  let isAdminLoggedIn = true
  
  if(localStorage.getItem('admin')){
    return true

  }

  return admin.isAdminLoggedIn;
 

}
