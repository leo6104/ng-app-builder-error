import { Component } from '@angular/core';
import { PdfViewer } from 'pdf-viewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewer],
  template: `<pdf-viewer />`
})
export class AppComponent {
  title = 'repro-step';
}
