import { EmployeeService } from "../../employee.service";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IEmployee } from "../../IEmployee";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"]
})
export class CheckoutComponent implements OnInit {
  tribeName: string;
  tribeIndex: number;
  employeeData: IEmployee[] = [];
  errorMessage = "";

  @Output() updateName: EventEmitter<any> = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private employeeservice: EmployeeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tribeName = JSON.parse(JSON.stringify(params["tribeName"]));
      this.tribeIndex = JSON.parse(JSON.stringify(params["tribeIndex"]));
    });

    this.employeeservice.getEmployees().subscribe(data => {
      this.employeeData = data;
    });

    // this.employeeData=this.employeeservice.getEmployees();
  }

  UpdateTribeName($event) {
    this.updateName.emit({
      UpdatedtribeName: $event.target.value,
      tribeIndex: this.tribeIndex
    });
  }
}
