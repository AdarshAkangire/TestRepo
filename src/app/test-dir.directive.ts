import { Directive,ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appTestDir]'
})
export class TestDirDirective {
  constructor(private eleref:ElementRef) { }

  @HostListener('click') onClick()
  {
    this.eleref.nativeElement.style.color='red'
  }

}
