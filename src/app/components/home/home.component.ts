import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup
  userEvents
  userReceivedEvents
  username
  constructor(private userService: UserService,) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null, { validators: [Validators.required] }),
    })
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value.username);
    this.username = this.form.value.username;
    this.userService.getUserEvents(this.username).
      then((userEvents) => {
        this.userEvents = userEvents;
      }).catch((err) => {
        console.log(err);
      });
    this.userService.getUserReceivedEvents(this.username).
      then((userReceivedEvents) => {
        this.userReceivedEvents = userReceivedEvents;
      }).catch((err) => {
        console.log(err);
      });
  }
}
