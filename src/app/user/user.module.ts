import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/material.module';

const routes: Routes = [{ path: 'user', component: UserComponent }];

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
})
export class UserModule {}
