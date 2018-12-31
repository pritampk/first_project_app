import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/app.home.component";
import { AboutComponent } from "./about/app.about.component";
import { NgModule } from "@angular/core";
import { ShoppingComponent } from "./shopping/app.shopping.component";
import { BookingComponent } from "./booking/app.booking.component";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "shopping", component: ShoppingComponent },
  { path: "booking", component: BookingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
