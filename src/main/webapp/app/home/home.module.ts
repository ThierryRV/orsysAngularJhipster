import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrsysAngularJhipsterSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [OrsysAngularJhipsterSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class OrsysAngularJhipsterHomeModule {}
