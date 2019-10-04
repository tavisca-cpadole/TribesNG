import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-employee-card",
  templateUrl: "./employee-card.component.html",
  styleUrls: ["./employee-card.component.css"]
})
export class EmployeeCardComponent implements OnInit {
  @Input() name: string;
  @Input() designation: string;
  @Input() imageUrl: string;

  ngOnChanges(): void {}
  ngOnInit() {}
}
