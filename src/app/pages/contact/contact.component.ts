import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { ContactService } from '../../service/contact.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 templateParams = {
    from_name: '',
    email: '',
    message: '', 
    hearabout: '', 
    interest: '',
    referal: ''
  };

  username = ""; 
  usermessage = ""; 
  useremail = "";
  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit(){};

  public sendEmail(event: any) {
    this.templateParams.from_name = event.target.user_name.value;
    this.templateParams.email = event.target.email.value;
    this.templateParams.message = event.target.usermessage.value;
    this.templateParams.hearabout = event.target.hearabout.value;
    this.templateParams.interest = event.target.gridRadios.value
    this.templateParams.referal = event.target.referal.value;
    
    event.preventDefault();
    emailjs.send('service_lx1wj97', 'template_4kpbqbc', this.templateParams, 'user_HB7mvCjWOIJmN1xDWdkCO')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error: any) => {
        console.log(error.text);
      });
  }

}
