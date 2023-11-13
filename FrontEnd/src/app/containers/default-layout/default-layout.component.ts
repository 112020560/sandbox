import {Component} from '@angular/core';
import { StorageService } from '../../services/common/storage.service';
import { SecurityService } from '../../services/security.service';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  //styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  public current_env: string = '';

  constructor(private session: StorageService, private security: SecurityService) {
    this.current_env = session.getCurrentEnvironment();
  //   this.ambientes = [
  //     {label: 'Desarrollo', value: 'Dev'},
  //     {label: 'UAT', value: 'Uat'},
  //     {label: 'Produccion', value: 'Prod'}
  // ];
  }

  onLogout() {
    this.security.logout();
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
