import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MasterView1Component } from './master-view1/master-view1.component';
import { MasterView2Component } from './master-view2/master-view2.component';
import { IgxCardModule, IgxComboModule, IgxButtonModule, IgxIconModule, IgxTabsModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MasterView1Component,
    MasterView2Component
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxCardModule,
    IgxComboModule,
    IgxButtonModule,
    IgxIconModule,
    IgxTabsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
