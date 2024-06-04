import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PdfViewer } from 'pdf-viewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PdfViewer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'repro-step';
}
