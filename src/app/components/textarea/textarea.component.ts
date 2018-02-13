import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {CommandExecutorService} from '../../services/command-executor.service';


@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'
  ]
})
export class TextareaComponent implements OnInit {

  @Input() title: string = '';
  @Input() inputContent: string = '';
  @Output() outputContent = new EventEmitter<string>();
  isLinkFormShown: boolean = false;

  configTextarea: any;

  constructor(private commandExecutor: CommandExecutorService) {

    this.configTextarea = {
      editable: true,
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      toolbar: [
        ['link']
      ]
    };
  }

  ngOnInit(): void {
    console.log('Textarea title: ', this.title);
    console.log('Input content: ', this.inputContent);
    this.outputContent.subscribe( it => console.log('Output content: ', it));
  }

  onInput(val){
    this.outputContent.emit(val.target.innerHTML);
  }

  showLinkForm() {
    // this.isLinkFormShown = !this.isLinkFormShown;
    this.executeCommand();
  }

  executeCommand(){
    // this.isLinkFormShown = !this.isLinkFormShown;
    this.commandExecutor.insertURL();
  }

}
