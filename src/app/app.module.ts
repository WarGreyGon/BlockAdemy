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

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    GarageComponent,
    BlocksMenuComponent,
    BlocksMenuCategoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        { path: 'index', component: IndexComponent },
        { path: 'login', component: LoginComponent },
        { path: 'garage', component: GarageComponent }
    ])
  ],
  providers: [BlocksMenuService],
  bootstrap: [AppComponent]
})


export class AppModule { }
