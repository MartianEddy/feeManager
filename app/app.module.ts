import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './footer/footer.component';

// import{
//   MatToolbarModule
// }from '@angular/material';
// import{ MatBadgeModule } from '@angular/material/badge';

// const MaterialComponents = [
//   MatBadgeModule,
//   MatToolbarModule
// ];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MainPageComponent,
    FooterComponent
    // MaterialComponents

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    // MaterialComponents
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
