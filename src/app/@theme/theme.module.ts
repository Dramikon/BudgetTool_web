import { NgModule, ModuleWithProviders, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MobxAngularModule } from 'mobx-angular';
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';
import { ErrorHandlerInterceptor } from './components/error-handler/error-handler.interceptor';
import { ErrorHandlerService } from './components/error-handler/error-handler.service';
import { ConfirmationBarService } from './services/confirmation-bar.service';

import {
  MatButtonModule,
  MatTableModule,
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatTabsModule,
  MatListModule,
  MatSnackBarModule,
} from '@angular/material';

import { MatButtonToggleModule } from '@angular/material/button-toggle';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatTableModule,
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatTabsModule,
  MatListModule,
  MatSnackBarModule,
  MatButtonToggleModule,
];

const EXPORTED_MODULES = [
  MobxAngularModule,
  MatButtonModule,
  MatTableModule,
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatTabsModule,
  MatListModule,
  MatSnackBarModule,
  MatButtonToggleModule,
];

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const COMPONENTS = [ErrorHandlerComponent];
const ENTRY_COMPONENTS = [ErrorHandlerComponent];
const PIPES = [];
const NB_MODULES = [];
const PROVIDERS = [ErrorHandlerService, ConfirmationBarService];


const INTERCEPTORS = [ErrorHandlerInterceptor];

export function nbErrorHandlerInterceptorsFactory(injector: Injector) {
  return new ErrorHandlerInterceptor(injector);
}

@NgModule({
  imports: [RouterModule, ...BASE_MODULES, ...NB_MODULES, ...MATERIAL_MODULES],
  exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS, ...PIPES, ...EXPORTED_MODULES],
  providers: [],
  declarations: [...COMPONENTS, ...PIPES],
  entryComponents: [...ENTRY_COMPONENTS],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [
        // ...NB_THEME_PROVIDERS,
        ...PROVIDERS,
        ...INTERCEPTORS,
        // ...STORES,
        {
          provide: HTTP_INTERCEPTORS,
          useFactory: nbErrorHandlerInterceptorsFactory,
          deps: [Injector],
          multi: true,
        },
      ],
    };
  }
}
