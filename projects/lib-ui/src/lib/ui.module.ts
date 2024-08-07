import { NgModule } from "@angular/core";

import { UIButtonComponent } from "./components";

/**
 * These are the components to be exported.
 *
 * @type {*}
 */
const COMPONENTS: any[] = [
  UIButtonComponent
];

/**
 * The UI Module to import / export all ui components.
 *
 * @deprecated Use Standalone Component directly!
 * @export
 * @class UiModule
 */
@NgModule({
  imports: [...COMPONENTS],
  exports: [...COMPONENTS]
})

export class UiModule {
}
