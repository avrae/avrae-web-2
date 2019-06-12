import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Text} from '../../../../../../../schemas/homebrew/SpellEffects';
import {Spell} from '../../../../../../../schemas/homebrew/Spells';

@Component({
  selector: 'avr-text-effect',
  template: `
    <mat-form-field class="wide">
        <textarea matInput placeholder="Description" rows="5" (change)="changed.emit()"
                  [(ngModel)]="effect.text"></textarea>
    </mat-form-field>
  `,
  styleUrls: ['../effect-editor.component.css']
})
export class TextEffectComponent implements OnInit {

  @Input() effect: Text;
  @Input() spell: Spell;
  @Output() changed = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
