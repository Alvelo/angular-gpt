import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-assistant-pages',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './assistant-pages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AssistantPagesComponent {

}
