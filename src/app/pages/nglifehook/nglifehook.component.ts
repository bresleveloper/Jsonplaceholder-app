import { 
  Component,
  OnChanges, 
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy

} from '@angular/core';

@Component({
  selector: 'app-nglifehook',
  templateUrl: './nglifehook.component.html',
  styleUrls: ['./nglifehook.component.css']
})
export class NglifehookComponent implements 
                OnChanges, 
                OnInit,
                DoCheck,
                AfterContentInit,
                AfterContentChecked,
                AfterViewInit,
                AfterViewChecked,
                OnDestroy {
           
  title:string 
  showSomething:boolean 
  thing:object = { name : 'no name yet' }                  

  setThingName(name){
    this.thing = Object.assign({}, {name:name})
    //this.thing.name='ariel'
  }
  
  constructor() {
    console.log('NglifehookComponent constructor');
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log('NglifehookComponent ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('NglifehookComponent ngOnInit');
  }

  ngDoCheck(): void {
    console.log('NglifehookComponent ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('NglifehookComponent ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('NglifehookComponent ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('NglifehookComponent ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('NglifehookComponent ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('NglifehookComponent ngOnDestroy');
  }

}
