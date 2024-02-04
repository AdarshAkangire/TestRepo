import { Component } from '@angular/core';
import { DomSanitizer ,SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-unit-testing',
  templateUrl: './unit-testing.component.html',
  styleUrls: ['./unit-testing.component.css']
})
export class UnitTestingComponent {
  private data="TestData"
   dt:any
  private html="test code"

  constructor(private obj:DomSanitizer)
  {

  }
  chekcEven(val:any)
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

  getSafeHtml()
  {
    if(this.obj.bypassSecurityTrustHtml(this.html)==="SafeHtml")
    {
     console.log("code is safe")
    }
    else
    {
      console.log("code is not safe")
    }
  
  }
}
