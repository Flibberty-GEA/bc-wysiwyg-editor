import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { AppComponent }   from './app.component';
import { TextareaModule } from './components/textarea/textarea.module';
import { CommandExecutorService } from './services/command-executor.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    TextareaModule
  ],
  exports: [
    FormsModule,
    CommonModule,
    TextareaModule
  ],
  providers: [ CommandExecutorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
