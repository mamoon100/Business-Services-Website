import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/main-component/header/header.component';
import { IconRegisterService } from './services/icon-register.service';
import { IconEnum } from './constant/IconEnum';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private iconRigesterService: IconRegisterService) {
    Object.entries(IconEnum).map(([iconName, iconLoaction]) => {
      this.iconRigesterService.registerIcon(iconLoaction);
    });
  }
}
