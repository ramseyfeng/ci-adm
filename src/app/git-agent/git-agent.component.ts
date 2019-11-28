import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EnvironmentService } from '../mock-servers/environment.service';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'ct-git-agent',
  templateUrl: './git-agent.component.html',
  styleUrls: ['./git-agent.component.scss']
})
export class GitAgentComponent implements OnInit {
  environments: [];
  gitAgentForm: FormGroup;
  private errorMessage: any;

  constructor(
    private fb: FormBuilder,
    private environmentService: EnvironmentService
  ) {}

  ngOnInit() {
    this.gitAgentForm = this.fb.group({
      agentName: ['', [Validators.required, Validators.minLength(3)]],
      environment: ['', [Validators.required, Validators.maxLength(50)]],
      host: ['', [Validators.required]],
      port: ['', [Validators.required]],
      tenant: ['', [Validators.required]],
      projectId: ['', [Validators.required]],
      gitReps: this.fb.array([this.buildGitConfigs()])
    });
    this.getEnvs();
  }

  get gitReps(): FormArray {
    return this.gitAgentForm.get('gitReps') as FormArray;
  }

  getEnvs(): void {
    this.environmentService.getEnvironments().subscribe({
      next: (envs: []) => {
        this.updateEnvironments(envs);
      },
      error: err => (this.errorMessage = err)
    });
  }

  private updateEnvironments(data: any) {
    this.environments = data.results;
  }

  private buildGitConfigs(): FormGroup {
    return this.fb.group({
      gitUrl: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      gitBranch: ['', [Validators.required]]
    });
  }

  addGitRep(): void {
    this.gitReps.push(this.buildGitConfigs());
  }

  deleteGitRep(idx: number): void {
    this.gitReps.removeAt(idx);
  }
}
