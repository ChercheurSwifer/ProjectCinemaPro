import { Component, OnInit, Input } from '@angular/core';
import { Formulaire} from '../../movie.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  @Input() form!: Formulaire;

  reservation: FormGroup;
  reservationo: FormGroup;

  constructor() {
    this.reservation = new FormGroup({
      nom_film: new FormControl(''),
      date_film: new FormControl(''),
      heure_film: new FormControl ('')
    })
    
    this.reservationo = new FormGroup({
      nom_film: new FormControl(''),
      date_film: new FormControl(''),
      heure_film: new FormControl ('')
    })
  }

  
  
  ngOnInit(): void {
  }

  onSubmit():void
  {
    alert("Vous avez bien réserver votre place :P");
     this.reservationo.setValue(this.reservation.value);
     console.log(this.reservationo.value);
     this.reservationo.patchValue(
       {
        nom_film:this.reservation.controls['nom_film'].value,
        date_film:this.reservation.controls['date_film'].value,
        heure_film:this.reservation.controls['heure_film'].value
       }
     )
  }
}
