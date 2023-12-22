import { FUNCTION_MESSAGE_FLAG, TOOL_MESSAGE_FLAG } from '@/const/message';

export const isFunctionMessageAtStart = (content: string) => {
  return content.startsWith(FUNCTION_MESSAGE_FLAG);
};

export const isToolMessageAtStart = (content: string) => {
  return content.startsWith(TOOL_MESSAGE_FLAG);
};

export const testFunctionMessageAtEnd = (content: string) => {
  const regExp = /{"function_call":.*?}}/;
  const match = content.match(regExp);

  return { content: match ? match[0] : '', valid: match };
};

export const testToolMessageAtEnd = (content: string) => {
  const regExp = /{"tool_calls":.*?}}/;
  const match = content.match(regExp);

  return { content: match ? match[0] : '', valid: match };
};
