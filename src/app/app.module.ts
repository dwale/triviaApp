import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MaterialModule } from './shared/material/material.module';
import {FormsModule} from '@angular/forms';
import {TriviaHomeComponent} from './trivia-home/trivia-home.component';
import {MatToolbarModule} from '@angular/material';

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
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
