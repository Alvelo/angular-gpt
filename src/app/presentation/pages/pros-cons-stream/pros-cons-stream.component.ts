import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pros-cons-stream',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pros-cons-stream.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ProsConsStreamComponent {

}
