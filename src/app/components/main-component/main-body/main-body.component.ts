import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main-body',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.scss',
})
export class MainBodyComponent {
  @Output() toggleSidenav = new EventEmitter<void>();
}
