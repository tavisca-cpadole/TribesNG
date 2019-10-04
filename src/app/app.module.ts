import { EmployeeService } from "./employee.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmployeeCardComponent } from "./shared/employee-card/employee-card.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, routingComponents, EmployeeCardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
