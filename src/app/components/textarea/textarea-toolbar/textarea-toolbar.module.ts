import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TextareaToolbarComponent } from './textarea-toolbar.component';


@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ TextareaToolbarComponent ],
  exports: [ TextareaToolbarComponent ]
})

export class TextareaToolbarModule { }
