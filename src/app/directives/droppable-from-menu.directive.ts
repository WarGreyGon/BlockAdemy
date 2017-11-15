import { Directive, HostListener, ComponentFactoryResolver, ViewContainerRef, ReflectiveInjector } from '@angular/core';
import { BlockComponent } from '../components/block/block.component';


@Directive({
    selector: '[droppableFromMenu]'
})


export class DroppableFromMenuDirective {


    @HostListener('drop', ['$event'])
    onDrop(event: any){
        event.stopPropagation();
        if (event.dataTransfer.getData('Text') == "MenuBlockItem"){
            this.injectBlock(event);
        }
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

        let injector = ReflectiveInjector.fromResolvedProviders([], this.viewContainerRef.parentInjector);
        let factory = this.componentFactoryResolver.resolveComponentFactory(BlockComponent);
        let injectableBlock = factory.create(injector);
        this.viewContainerRef.insert(injectableBlock.hostView);

        (injectableBlock.location.nativeElement as HTMLElement).style["position"] = 'absolute';
        (injectableBlock.location.nativeElement as HTMLElement).style["top"] = event.pageY + 'px';
        (injectableBlock.location.nativeElement as HTMLElement).style["left"] = event.pageX + 'px';
    }
}
