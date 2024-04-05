import { Component } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { IconEnum } from '../../../constant/IconEnum';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  icons = IconEnum;
}
