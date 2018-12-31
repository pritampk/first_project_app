import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/app.header.component";
import { HomeComponent } from "./home/app.home.component";
import { LeftsidebarComponent } from "./leftsidebar/app.leftsidebar.component";
import { AppRoutingModule } from "./app.routing.module";
import { AboutComponent } from "./about/app.about.component";
import { ShoppingComponent } from "./shopping/app.shopping.component";
import { BookingComponent } from "./booking/app.booking.component";

import { AppService } from "./app.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LeftsidebarComponent,
    AboutComponent,
    ShoppingComponent,
    BookingComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
