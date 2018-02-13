import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textarea-toolbar',
  templateUrl: './textarea-toolbar.component.html',
  styleUrls: ['./textarea-toolbar.component.css']
})

export class TextareaToolbarComponent {

  /**
   * Editor configuration
   */
  @Input() config: any;
  /**
   * Emits an event when a toolbar button is clicked
   */
  @Output() execute: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  /**
   * triggers command from the toolbar to be executed and emits an event
   *
   * @param command name of the command to be executed
   */
  triggerCommand(command: string): void {
    this.execute.emit(command);
  }

}
