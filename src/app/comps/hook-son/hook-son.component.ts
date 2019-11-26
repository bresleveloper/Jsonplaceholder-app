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
  selector: 'app-hook-son',
  templateUrl: './hook-son.component.html',
  styleUrls: ['./hook-son.component.css']
})
export class HookSonComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

    @Input() title:string
    @Input() thing:object 

  constructor() {
    console.log('HookSonComponent constructor');
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log('HookSonComponent ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('HookSonComponent ngOnInit');
  }

  ngDoCheck(): void {
    console.log('HookSonComponent ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('HookSonComponent ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('HookSonComponent ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('HookSonComponent ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('HookSonComponent ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('HookSonComponent ngOnDestroy');
  }

}
