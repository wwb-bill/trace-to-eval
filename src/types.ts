export interface TraceEvent{type:string;tool?:string;input?:Record<string,unknown>;output?:unknown;error?:string;durationMs?:number;}
export interface TraceFailure{sessionId:string;agentId:string;event:TraceEvent;}
export interface EvalCase{name:string;description:string;input:Record<string,unknown>;expectedBehavior:string;severity:"critical"|"high"|"medium";}