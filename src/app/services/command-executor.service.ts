import { Injectable } from '@angular/core';

@Injectable()
export class CommandExecutorService {

  public insertURL(): void {
    const linkURL = prompt('Enter URL', 'http://');
    const link = `<a href="${linkURL}">${linkURL}</a>`;
    document.execCommand('insertHTML', false, link);
    return;
  }

}
