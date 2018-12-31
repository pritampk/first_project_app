import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  selector: "app-header",
  templateUrl: "./app.header.component.html",
  styleUrls: ["./app.header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private appservice: AppService) {
    console.log("Appservice construcor");
  }

  private name;
  private age;
  ngOnInit() {
    this.name = this.appservice.getName();
    this.age=this.appservice.getAge();
  }
}
