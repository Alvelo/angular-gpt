import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-orthograpy-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orthograpy-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class OrthograpyPageComponent {

}
