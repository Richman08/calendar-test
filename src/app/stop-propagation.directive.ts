import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[StopPropagation]'
})
export class StopPropagationDirective {

  @HostListener("click", ["$event"])
  public onclick(event: any): void {
      event.stopPropagation();
  }
}
