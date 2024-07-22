import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [NgIf],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css'
})
export class TooltipComponent {
  @Input() showsTooltip = true;
  @Input() tooltipText = 'Default tooltip text';
  @Input() topPosition = 0;
  @Input() leftPosition = 0;

  constructor() { }
  ngOnInit(): void { }
}
