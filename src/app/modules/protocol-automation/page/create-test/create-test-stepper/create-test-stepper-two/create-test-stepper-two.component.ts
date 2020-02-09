import {Component, OnInit} from '@angular/core';
import {IProtocol} from '../../../../../../shared/models/protocol';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProtocolService} from '../../../../../../core/services/protocol.service';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import { MatRadioChange } from '@angular/material/radio';
import {LocationService} from '../../../../../../core/services/location.service';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'ct-create-test-stepper-two',
  templateUrl: './create-test-stepper-two.component.html',
  styleUrls: ['./create-test-stepper-two.component.scss']
})
export class CreateTestStepperTwoComponent implements OnInit {
  secondFormGroup: FormGroup;

  private protocolSelectedSubject = new BehaviorSubject<IProtocol>({
    location_type: 'hybrid',
    name: 'TruClient Web',
    protocol_id: '1',
    protocol_type: 'mdrv'
  });
  protocolTypeSelectedAction$ = this.protocolSelectedSubject.asObservable();

  locationsPerProtocol$ = combineLatest([this.locationSvc.locations$,
    this.protocolTypeSelectedAction$]).pipe(
    map(([locations, selectedProtocol]) => {
      return locations.filter(loc => {
        if (selectedProtocol.location_type === 'on-premise') {
          return loc.name === 'on-premise';
        }
        if (selectedProtocol.location_type === 'hybrid') {
          if (selectedProtocol.name === 'Hybrid Test') {
            return loc.name === 'hybrid';
          } else {
            return loc.name !== 'hybrid';
          }
        }
        if (selectedProtocol.location_type === 'cloud') {
          return loc.name !== 'hybrid';
        }
      });
    }));

  constructor(private fb: FormBuilder, private protocolSvc: ProtocolService, private locationSvc: LocationService) {
    this.secondFormGroup = this.fb.group({
      protocolCtrl: ['', Validators.required],
      locationCtrl: ['', Validators.required]
    });
  }

  protocols$: Observable<IProtocol[]>;

  ngOnInit() {
    this.protocols$ = this.protocolSvc.protocols$;
  }

  locationChange($event: MatRadioChange) {
    console.log($event);
  }

  protocolChange({value}: MatRadioChange) {
    const protocol = (value as IProtocol);
    this.protocolSelectedSubject.next(protocol);
  }
}
