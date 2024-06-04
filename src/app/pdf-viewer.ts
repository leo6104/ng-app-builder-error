import { Component } from '@angular/core';

@Component({
  selector: 'pdf-viewer',
  template: `pdfjs-dist bundle loaded`,
  standalone: true,
})
export class PdfViewer {
  constructor() {
    import('pdfjs-dist').then(js => {
      // do something;
    });
  }
}
