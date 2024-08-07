import { ChangeDetectionStrategy, Component } from "@angular/core";

/**
 * A Button Component.
 *
 * @export
 * @class UIButtonComponent
 */
@Component({
  selector: "app-ui-button",
  templateUrl: "./button.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: []
})
export class UIButtonComponent {

}
