import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CoursesPageModule } from './courses-page/courses-page.module';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core-module/core.module';
import { SpinnerInterceptor } from './core-module/spinner-component/spinner.interceptor';
import { TokenInterceptorService } from './login/auth-service/token-interceptor.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/effects/app.effects';
import { reducers, metaReducers } from './store/reducers';
import { coursesReducer } from './store/reducers/course.reducer';
import { CoursesEffects } from './store/effects/course.effects';
import { environment } from '../environments/environment';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LoginModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoursesPageModule,
    CoreModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([CoursesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: SpinnerInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
