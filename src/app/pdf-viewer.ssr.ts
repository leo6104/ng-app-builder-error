import { Component } from '@angular/core';

@Component({
  selector: 'pdf-viewer',
  template: `pdfjs-dist bundle skipped`,
  standalone: true,
})
export class PdfViewer {
  constructor() {
    // do not load pdfjs-dist package (skip for ssr in compile timing)
  }
}
