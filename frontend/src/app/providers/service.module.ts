import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  AuthGuard,
  CompendioService, CuentaService, CustomAdapter, LoginGuard,
  UsuarioService,
} from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UsuarioService,
    CompendioService,
    CustomAdapter,
    LoginGuard,
    AuthGuard,
    CuentaService
  ]
})
export class ServiceModule { }

