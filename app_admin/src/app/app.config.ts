import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
  provideRouter(routes),
  provideHttpClient()
  ]
};
