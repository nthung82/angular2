import {Directive, Component, TemplateRef, ViewContainerRef, ChangeDetectorRef} from '@angular/core';

@Directive({
  selector: '[simpleTimer]'
})
export class SimpleTimer {
 //private viewContainer1: ViewContainerRef
  running: boolean = false;
  time: number = 0;
  
  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef
              /*private cdr: ChangeDetectorRef*/) {}
              
  ngOnInit() {
    // we need to detach the change detector initially, to prevent a
    // "changed after checked" error.
  //  this.cdr.detach();
  }

  ngAfterViewInit() {
    let view = this.viewContainer.createEmbeddedView(this.templateRef);
     var input = document.getElementById('#hungnt');
    alert(input);
  }
  
 
 
 
  
 
}