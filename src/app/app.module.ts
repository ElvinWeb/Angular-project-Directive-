import { NgSwitchCase } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectiveTaskComponent } from './directive-task/directive-task.component';

@NgModule({
  declarations: [AppComponent, DirectiveTaskComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
