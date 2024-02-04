import { InvokeFunctionExpr } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
setColorClass="third";
get:any;
data:any;
tst="Division elelmt using proprty binding"
setValue(val:any):any
{
  if(val==="Adarsh")
  {
    this.data="third"

  }
  else
  {
    this.data="First"
  }
}
dt={
'color':'pink'
}

checkEven(val:any)
{
if((val%2)==0)
{
  return 1;
}
else
{
  return 0;
}
}

checkOdd(val:any)
{
if((val%2)!=0)
{
  return 1;
}
else
{
  return 0;
}
}
}
