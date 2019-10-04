import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Tribes";
  public tribes = [
    { Name: "Checkout", Value: "/checkout" },
    { Name: "Enablement", Value: "/enablement" },
    { Name: "Flights", Value: "/flights" },
    { Name: "Chai", Value: "/chai" }
  ];

  onActivate(emittedData) {
    emittedData.updateName.subscribe(data => {
      this.tribes[data.tribeIndex].Name = data.UpdatedtribeName;
    });
  }
}
