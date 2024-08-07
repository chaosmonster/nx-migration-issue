import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { UiModule } from "@company/ui";
import { ApiModule } from "@company/api";

/**
 * The AppModule.
 *
 * @export
 * @class AppModule
 */
@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    ApiModule,
    UiModule
  ],
  providers: []
})
export class AppModule {
}
