import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-nav-par',
  templateUrl: './nav-par.component.html',
  styleUrls: ['./nav-par.component.css']
})
export class NavParComponent  {
islogin:boolean = false;
home:any
navbg="NAVbg"
  constructor(private _authService:AuthService ,private _router:Router) {
   this._authService.userData.subscribe(res =>{

     if (res) {
       this.islogin=true
     }else{
      this.islogin=false
     }

   })
  }



  logout(){
    this.islogin=false
}


goHome(){
  if (this.islogin) {
this._router.navigate(['home'])
  }
}



@HostListener('window:scroll', [])
navBg(){
  if(scrollY >= 567){
    this.navbg = "navbg"
  }else if(scrollY <= 567){
    this.navbg = "NAVbg"

  }

}
}
