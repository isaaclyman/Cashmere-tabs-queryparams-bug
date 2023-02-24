import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleContainerComponent } from './example-container.component';
import { CashmereModule } from './cashmere.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TabsHorizontalExampleComponent } from './tabs-horizontal/tabs-horizontal-example.component';
import { Child1Component } from './child-1.component';
import { Child2Component } from './child-2.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleContainerComponent,
    TabsHorizontalExampleComponent,
    Child1Component,
    Child2Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CashmereModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
