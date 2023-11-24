import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GrapejsModule } from './grapejs/grapejs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GrapejsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
