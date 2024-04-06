import { Component, EventEmitter, Output } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { IconEnum } from '../../../constant/IconEnum';
import { HttpClientModule } from '@angular/common/http';
import { HeaderActionComponent } from './header-action/header-action.component';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, NavigationComponent, HeaderActionComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  icons = IconEnum;
  @Output() toggleSidenav = new EventEmitter<void>();

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }
}
