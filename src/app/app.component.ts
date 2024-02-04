import { Component, inject } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANgularInterviewProjects';
  router=inject(Router);

  

  /*TestForm=new FormGroup(
    {
      user:new FormControl("Adarsh"),
      pass:new FormControl()
     
    }
  )*/
  private obj=new FormBuilder()
  data:any;
  checkbool:any;
  info:any;
  TestForm=this.obj.group(
    {
      user:["",[Validators.required]],
      pass:[""]
    }
  )

  getFormData()
  {
    const id=1;
   
    alert("Data is stored successfully")
    /*console.log(this.TestForm.value.user)
    sessionStorage.setItem('name','adarsh')
    localStorage.setItem('name','adarsh')*/
    /*if(this.TestForm.value.user==="adarsh")
    {
      this.router.navigate(["/admin",id])
    }*/
    this.TestForm.reset();
    //location.reload();
  }
getValue(val:any)
{
this.data=val;
}
getCheckBoxValue(value:any)
{
  this.checkbool=value;
}

}
