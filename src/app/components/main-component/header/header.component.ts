import { Component } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { IconEnum } from '../../../constant/IconEnum';
import { HttpClientModule } from '@angular/common/http';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderActionComponent } from './header-action/header-action.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, HeaderMenuComponent, HeaderActionComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  icons = IconEnum;
}
