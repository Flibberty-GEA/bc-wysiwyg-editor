import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bc-wysiwyg-editor';

  setMessageBody(output: string): void {
    console.log('message body: ', output);
  }
}
