import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { SetGhPatKeyService } from '../../services/set-gh-pat-key.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  key: string;

  constructor(public dialog: MatDialog, public SetGhPatKeyService: SetGhPatKeyService, private userService: UserService,) { }
  openDialog() {
    if (this.dialog.openDialogs.length == 0) {
      const dialogRef = this.dialog.open(KeyDialogComponent, {
        width: '350px',
        data: { key: this.key }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.key = result
          this.SetGhPatKeyService.set_pat(this.key);
        }
      });
    }
  }
  ngOnInit(): void {
    this.key = this.SetGhPatKeyService.get_pat();
  }

}



@Component({
  selector: 'key-dialog',
  templateUrl: './key-dialog.component.html',
  styleUrls: ['./key-dialog.component.css']
})
export class KeyDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) { }
}
