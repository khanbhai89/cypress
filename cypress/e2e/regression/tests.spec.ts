//This is spec file, inside your google-search.spec.ts
import Home from "../../page-objects/Home.page";
import Click from "../../page-objects/Click.page";
import Overlapped from "../../page-objects/OverlappedElement.page";
import AjaxData from "../../page-objects/AjaxData.page";
import Visibility from "../../page-objects/Visibility.page";
import SampleApp from "../../page-objects/SampleApp.page";
import TextInput from "../../page-objects/TextInput.page";
import ProgressBar from "../../page-objects/ProgressBar.page";

describe("Cognigy Scenarios", () => {
  it("Click Button", () => {
    Home.open();
    Home.getElement("Click");
    Click.clickButton();
  });
  it("Overlapped Element", () => {
    Home.open();
    Home.getElement("Overlapped Element");
    Overlapped.inputName("Hammad");
  });
  it("Ajax Data", () => {
    Home.open();
    Home.getElement("AJAX Data");
    AjaxData.clickButton();
  });
  it("Visibility", () => {
    Home.open();
    Home.getElement("Visibility");
    Visibility.verifyButtonsVisible();
    Visibility.clickHideButton();
    Visibility.verifyButtonsNotVisible();
  });
  it("Sample App", () => {
    Home.open();
    Home.getElement("Sample App");
    SampleApp.login("name", "password");
  });
  it("Text Input", () => {
    Home.open();
    Home.getElement("Text Input");
    TextInput.buttonChange("Button Name");
  });
  it("Progress Bar", () => {
    Home.open();
    Home.getElement("Progress Bar");
    ProgressBar.measureProgress("38");
  });
});
