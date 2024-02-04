import { Component,Input,OnChanges, SimpleChanges,OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnChanges,OnInit {
 message=1

constructor()
{
  console.log("inside the constructure")
}

update()
{
  this.message++;
}
ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
}

ngOnInit(): void {
    console.log("inside the ngoninit")
}
}
