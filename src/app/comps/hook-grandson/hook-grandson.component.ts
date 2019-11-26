import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,

  Input

} from '@angular/core';

@Component({
  selector: 'app-hook-grandson',
  templateUrl: './hook-grandson.component.html',
  styleUrls: ['./hook-grandson.component.css']
})
export class HookGrandsonComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

    @Input() title:string = 'do title change' 
    @Input() thing:object 

  constructor() {
    console.log('HookGrandsonComponent constructor');
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log('HookGrandsonComponent ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('HookGrandsonComponent ngOnInit');
  }

  ngDoCheck(): void {
    console.log('HookGrandsonComponent ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('HookGrandsonComponent ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('HookGrandsonComponent ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('HookGrandsonComponent ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('HookGrandsonComponent ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('HookGrandsonComponent ngOnDestroy');
  }

}
