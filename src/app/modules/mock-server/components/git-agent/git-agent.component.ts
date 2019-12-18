import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EnvironmentService} from '../../../../core/services/environment.service';
import {GitAgentService} from '../../../../core/services/git-agent.service';
import {IEnvironment, IEnvironmentsResponse} from '../../../../shared/models/environment';

@Component({
  selector: 'ct-git-agent',
  templateUrl: './git-agent.component.html',
  styleUrls: ['./git-agent.component.scss']
})
export class GitAgentComponent implements OnInit {
  environments: [];
  gitAgentForm: FormGroup;
  private errorMessage: any;

  startInProgressing = false;
  selectedEnv;

  constructor(
    private fb: FormBuilder,
    private environmentService: EnvironmentService,
    private gitAgentService: GitAgentService
  ) {
  }

  ngOnInit() {
    this.gitAgentForm = this.fb.group({
      agentName: ['sample', [Validators.required, Validators.minLength(3)]],
      environment: ['', [Validators.required, Validators.minLength(3)]],
      host: ['10.5.28.71', [Validators.required]],
      port: ['3030', [Validators.required]],
      tenant: ['stormui', [Validators.required]],
      projectId: [1, [Validators.required]],
      repository: this.fb.array([this.buildGitConfigs()])
    });
    this.getEnvs();
  }

  get repository(): FormArray {
    return this.gitAgentForm.get('repository') as FormArray;
  }

  getEnvs(): void {
    this.environmentService.getEnvironments().subscribe({
      next: (envs: IEnvironment[]) => {
        this.updateEnvironments(envs);
      },
      error: err => (this.errorMessage = err)
    });
  }

  private updateEnvironments(data: any) {
    this.environments = data;
  }

  private buildGitConfigs(): FormGroup {
    return this.fb.group({
      url: ['git@github.houston.softwaregrp.net:hai-yan-shi/test-scripts.git', [Validators.required]],
      branch: ['master', [Validators.required]]
    });
  }

  addGitRep(): void {
    this.repository.push(this.buildGitConfigs());
  }

  deleteGitRep(idx: number): void {
    this.repository.removeAt(idx);
  }

  selectEnv({value}) {
    this.selectedEnv = this.environmentService.getEnvByName(value);
    this.gitAgentForm.patchValue({
      host: this.selectedEnv.host,
      port: this.selectedEnv.port
    });
  }

  createAgent() {
    this.startInProgressing = true;
    const agent = {
      ...this.gitAgentForm.value,
      proxy: 'http://web-proxy.houston.softwaregrp.net:8080'
    };
    this.gitAgentService.startAgent(agent).subscribe({
      next: (data => {
        this.startInProgressing = false;
        this.gitAgentService.addAgent(data);
      }),
      error: err => console.log(err)
    });
  }
}
