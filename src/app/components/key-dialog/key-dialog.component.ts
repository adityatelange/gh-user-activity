import { Component, Inject } from '@angular/core';
import { SetGhPatKeyService } from '../../services/set-gh-pat-key.service'
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'key-dialog',
  templateUrl: './key-dialog.component.html',
  styleUrls: ['./key-dialog.component.css']
})
export class KeyDialogComponent {
  hide = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private SetGhPatKeyService: SetGhPatKeyService) { }

  deletePAT() {
    this.SetGhPatKeyService.rm_pat()
  }
}
