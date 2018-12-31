import { Injectable } from "@angular/core";

@Injectable()
export class AppService {
  constructor() {}

  public uiconfig = {
    name: "Pritam",
    age: 23,
    id: 123
  };

  public getName() {
    return this.uiconfig.name;
  }
  public setName(name: string) {
    this.uiconfig.name = name;
  }
  public getAge() {
    return this.uiconfig.age;
  }
  public setAge(age: number) {
    this.uiconfig.age = age;
  }

  public getId() {
    return this.uiconfig.id;
  }
  public setId(id: number) {
    this.uiconfig.id = id;
  }
}
