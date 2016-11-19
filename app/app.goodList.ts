import {Component, OnInit,ElementRef,TemplateRef,ViewContainerRef,
  ViewChild,Renderer,AfterViewInit } from '@angular/core';
import { SimpleTimer }  from './SimpleTimer';
//Import classes
import { Employee} from './employee';
import { EmployeeService } from './employee.service';
import { TITLE_JOB } from './TITLE_JOB';
// Declare array11

const containerSize: number = 320;
const draggableHeight: number = 50;
const draggableWidth: number = 100;
@Component({
  moduleId: module.id,
  selector: 'my-googList',
  templateUrl: 'html/goodList.html',
  styleUrls: ['styles/styles.css'],
   
  providers: [EmployeeService]
})
export class GoodComponent implements OnInit {
  title = 'Good Employee';
  @ViewChild('container') private containerElement: ElementRef;
    @ViewChild('draggable') private draggableElement: ElementRef;
    @ViewChild('hungnt')private userProfile: SimpleTimer;
     private boundary: any = {};
    private draggable: any;
    private isMouseDown = false;
   goodemployees: Employee[] = [];    
  selectedHero: Employee;
  onSelect(employee: Employee): void {
    this.selectedHero = employee;
  }
  constructor(public heroService: EmployeeService,private renderer: Renderer/*,
    private templateRef: TemplateRef<any>, 
            private viewContainer: ViewContainerRef*/) {

  }
  ngAfterViewInit() {
  alert(this.userProfile);
  //this.viewContainer.createEmbeddedView(this.templateRef);
}
 private onMouseButton(event: MouseEvent): void {
        this.isMouseDown = event.buttons === 1;
    }

    private onMouseMove(event: MouseEvent): void {
        if (this.isMouseDown /*&& this.isInsideBoundary(event)*/) {
            this.renderer.setElementStyle(this.draggable, 'left', event.clientX - (draggableWidth / 2) + "px");
            this.renderer.setElementStyle(this.draggable, 'top', event.clientY - (draggableHeight / 2) + "px");
        }
    }

    private isInsideBoundary(event: MouseEvent) {
        return event.clientX > this.boundary.left &&
            event.clientX < this.boundary.right &&
            event.clientY > this.boundary.top &&
            event.clientY < this.boundary.bottom;
    }
  ngOnInit() {
    var host = document.querySelector('template');
    

var content = document.createElement('content');
content.setAttribute('select', 'h1'); // <content select="h1"></content>
//root.appendChild(content);
if(host==null)
alert('a');
  //  console.log("Init component!!!!");
   this.draggable = this.draggableElement.nativeElement;
//alert( this.draggable);
        const container = this.containerElement.nativeElement;
        this.boundary = {
            left : container.offsetLeft + (draggableWidth / 2),
            right : container.clientWidth + container.offsetLeft - (draggableWidth / 2),
            top : container.offsetTop + (draggableHeight / 2),
            bottom : container.clientWidth + container.offsetTop - (draggableHeight / 2),
        }
  //  this.goodemployees=this.heroService.getgoodEmployee();
  }
  ngDoCheck() {
    // Custom change detection
    console.log("ngDoCheck");
  }
  ngOnChanges(changes) {
    console.log("ngOnChanges");

  }
  ngAfterContentInit() {
    // Component content has been initialized

    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }
 
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }
}

//bootstrap(AppComponent);