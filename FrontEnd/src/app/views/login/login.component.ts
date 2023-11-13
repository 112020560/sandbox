import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../services/common/storage.service';
import { ConfiguratorService } from '../../services/configurator.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent  implements OnInit {

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private session: StorageService, private config: ConfiguratorService){}
  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      username: '',
      password: '',
      environmetid: ['', Validators.required]
    });
  }

  onLogin() {
    this.session.setEnvironment(this.formGroup.value.environmetid);
    this.config.setUrl();
    this.router.navigate(['/dashboard'])
  }
}
