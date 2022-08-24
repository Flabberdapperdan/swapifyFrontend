import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/material.module';

const routes: Routes = [{ path: 'admins', component: AdminComponent }];

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
