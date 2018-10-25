import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MaterialModule } from './shared/material/material.module';
import {FormsModule} from '@angular/forms';
import {TriviaHomeComponent} from './trivia-home/trivia-home.component';
import {MatToolbarModule} from '@angular/material';
import {AuthInterceptor} from "./shared/auth.interceptor";
console.log('GGGGGGGGG');
@NgModule({
  declarations: [
    AppComponent,
    TriviaHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [HttpClientModule,
  //   {
  //   provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
