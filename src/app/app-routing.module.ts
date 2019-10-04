import { CheckoutComponent } from "./tribes/checkout/checkout.component";
import { FlightsComponent } from "./tribes/flights/flights.component";
import { EnablementComponent } from "./tribes/enablement/enablement.component";
import { ChaiComponent } from "./tribes/chai/chai.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "checkout",
    component: CheckoutComponent
  },
  { path: "enablement", component: EnablementComponent },
  { path: "flights", component: FlightsComponent },
  { path: "chai", component: ChaiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  CheckoutComponent,
  EnablementComponent,
  FlightsComponent,
  ChaiComponent
];
