import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoursesPageModule } from './courses-page/courses-page.module';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core-module/core.module';
import { SpinnerInterceptor } from './core-module/spinner-component/spinner.interceptor';
import { TokenInterceptorService } from './login/auth-service/token-interceptor.service';




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
    CoreModule
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
