export interface IAgent {
  agentName: string;
  associateFile: string;
  error?: string;
  isStarted: boolean;
  pid: number;
  tenant: string;
}

export interface IAddAgentResponse {
  results: IAgent;
}

export interface IAgentsListResponse {
  results: IAgent[];
}
