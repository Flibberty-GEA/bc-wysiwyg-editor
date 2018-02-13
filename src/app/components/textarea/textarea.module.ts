import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { FormsModule }           from '@angular/forms';

import { TextareaComponent }     from './textarea.component';
import { TextareaToolbarModule } from './textarea-toolbar/textarea-toolbar.module';

@NgModule({
  imports: [ CommonModule, FormsModule, TextareaToolbarModule ],
  declarations: [ TextareaComponent ],
  exports: [ TextareaComponent, TextareaToolbarModule ]
})

export class TextareaModule { }
