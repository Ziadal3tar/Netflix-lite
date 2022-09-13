// import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
errors:string=''
registerForm:FormGroup = new FormGroup({
  first_name: new FormControl(null, [Validators.required , Validators.minLength(3) , Validators.maxLength(15)]),
  last_name: new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(15)]),
  email: new FormControl(null , [Validators.required , Validators.email]),
  password: new FormControl(null , [Validators.required ]),
  age: new FormControl(null, [Validators.required , Validators.min(12) , Validators.max(100)])

})

  constructor(private _AuthService:AuthService, private _router:Router) { }


  registerUser(form:any){
    const user ={
      firstName:this.registerForm.get("first_name")?.value,
      lastName:this.registerForm.get("last_name")?.value,
      email:this.registerForm.get("email")?.value,
      password:this.registerForm.get("password")?.value,
      age:this.registerForm.get("age")?.value,

    }
    if (form.valid) {

      this._AuthService.signUp(user).subscribe((res:any) =>{

        if(res.message=='Added'){
          this._router.navigate(['login'])
        }else{
          this.errors=res.message
        }

      })

    }

  }
}
