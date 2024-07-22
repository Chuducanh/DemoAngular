import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './components/tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }