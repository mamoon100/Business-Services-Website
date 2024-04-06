import { Component, ViewChild } from '@angular/core';
import { IconRegisterService } from './services/icon-register.service';
import { IconEnum } from './constant/IconEnum';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';
import { MainBodyComponent } from './components/main-component/main-body/main-body.component';
import { SideNavigationComponent } from './components/main-component/side-navigation/side-navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    MainBodyComponent,
    SideNavigationComponent,
    MatSidenav,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  constructor(private iconRigesterService: IconRegisterService) {
    Object.entries(IconEnum).map(([iconName, iconLoaction]) => {
      this.iconRigesterService.registerIcon(iconLoaction);
    });
  }
}
