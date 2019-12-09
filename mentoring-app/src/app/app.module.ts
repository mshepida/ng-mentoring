import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesPageModule } from './courses-page/courses-page.module';
import { MatButtonModule } from '@angular/material/button';
import { LoginModule } from './login-page/login.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';

const routes: Routes = [
  {
      path: '',
      redirectTo: '/courses',
      pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CoursesPageModule,
    LoginModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
