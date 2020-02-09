import {Injectable} from '@angular/core';
import {RegionService} from '../../../../../core/services/region.service';
import {ICreateTest} from '../../../../../shared/models/create-test';
import {Observable} from 'rxjs';
import {IRegion} from '../../../../../shared/models/region';

@Injectable({
  providedIn: 'root'
})
export class CreateTestService {

  data: ICreateTest = {};

  constructor(private regionSvc: RegionService) {
  }

  initRegions(): Observable<IRegion[]> {
    return this.regionSvc.getRegions(this.data.envName, this.data.tenant, this.data.projectId);
  }

  updateData(props) {
    this.data = {
      ...this.data,
      ...props
    };
  }

}
