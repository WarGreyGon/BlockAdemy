import { Directive, HostListener, ComponentFactoryResolver, ViewContainerRef, ReflectiveInjector } from '@angular/core';
import { BlockComponent } from '../components/garage/blocks-whiteboard/block/block.component';


@Directive({
    selector: '[droppableFromMenu]'
})


export class DroppableFromMenuDirective {


    @HostListener('drop', ['$event'])
    onDrop(event: any){
        event.stopPropagation();
        if (event.dataTransfer.getData('Text') == "MenuBlockItem"){
            this.injectBlock(event);
        } else {
            this.normalDrop(event);
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

        let injectedEl = (injectableBlock.location.nativeElement as HTMLElement);
        injectedEl.style["position"] = 'absolute';
        injectedEl.style["top"] = (event.pageY - (40)) + 'px';
        injectedEl.style["left"] = (event.pageX - (40)) + 'px';
    }

    private normalDrop(event: any): void {

        event.preventDefault();
    }
}
