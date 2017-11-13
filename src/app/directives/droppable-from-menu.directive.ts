import { Directive, HostListener, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { BlockComponent } from '../components/block/block.component';


@Directive({
    selector: '[droppableFromMenu]'
})


export class DroppableFromMenuDirective {


    @HostListener('drop', ['$event'])
    onDrop(event: any){
        event.stopPropagation();
        this.injectBlock(event);
    }

    @HostListener('dragover', ['$event'])
    onDragOver(event: any) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        event.dataTransfer.dropEffect = 'move';
    }



    constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }


    private injectBlock(event: any): void {

        const factory = this.componentFactoryResolver.resolveComponentFactory(BlockComponent);
        const ref = this.viewContainerRef.createComponent(factory);


        ref.instance.name = "test"
        ref.instance.initialXPosition = 300;
        ref.instance.initialYPosition = 300;
        ref.instance.color = "yellow";


        ref.changeDetectorRef.detectChanges();
    }
}
