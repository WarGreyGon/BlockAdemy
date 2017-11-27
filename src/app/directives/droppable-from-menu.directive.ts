import { Directive, HostListener, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import { BlockComponent } from '../components/garage/blocks-whiteboard/block/block.component';
import { BlocksWhiteboardComponent } from '../components/garage/blocks-whiteboard/blocks-whiteboard.component';


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

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private host: BlocksWhiteboardComponent) {

    }


    private injectBlock(event: any): void {

        const factory = this.componentFactoryResolver.resolveComponentFactory(BlockComponent);
        const injectableBlock = factory.create(this.host.template.parentInjector);
        this.host.template.insert(injectableBlock.hostView);

        let injectedEl = (injectableBlock.location.nativeElement as HTMLElement);
        injectedEl.style["position"] = 'absolute';
        injectedEl.style["top"] = (event.offsetY - (40)) + 'px';
        injectedEl.style["left"] = (event.offsetX - (40)) + 'px';
    }

    private normalDrop(event: any): void {

        event.preventDefault();
    }
}
