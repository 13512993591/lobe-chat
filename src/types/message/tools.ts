export interface ChatPluginPayload {
  apiName: string;
  arguments: string;
  identifier: string;
  type: 'standalone' | 'default' | 'builtin';
}

export interface ChatToolPayload {
  apiName: string;
  arguments: string;
  id: string;
  identifier: string;
  type: 'standalone' | 'default' | 'builtin';
}
