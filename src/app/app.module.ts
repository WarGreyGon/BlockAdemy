import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { GarageComponent } from './components/garage/garage.component';
import { BlocksMenuComponent } from './components/blocks-menu/blocks-menu.component';

import { BlocksMenuService } from './services/blocks-menu.service';
import { BlocksMenuCategoryComponent } from './components/blocks-menu-category/blocks-menu-category.component';
import { BlocksMenuCategoryItemComponent } from './components/blocks-menu-category-item/blocks-menu-category-item.component';
import { BlocksWhiteboardComponent } from './components/blocks-whiteboard/blocks-whiteboard.component';
import { BlockComponent } from './components/block/block.component';
import { DroppableFromMenuDirective } from './directives/droppable-from-menu.directive';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    GarageComponent,
    BlocksMenuComponent,
    BlocksMenuCategoryComponent,
    BlocksMenuCategoryItemComponent,
    BlocksWhiteboardComponent,
    BlockComponent,
    DroppableFromMenuDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        { path: 'index', component: IndexComponent },
        { path: 'login', component: LoginComponent },
        { path: 'garage', component: GarageComponent }
    ]),
  ],
  providers: [
      BlocksMenuService,
  ],
  bootstrap: [
      AppComponent
  ],
  exports: [
  ],
  entryComponents: [
      BlockComponent
  ]
})


export class AppModule { }
