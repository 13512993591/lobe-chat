import { memo, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import { ChatMessage } from '@/types/message';

export const ToolMessage = memo<ChatMessage>(({ id, content, tools }) => {
  const [showRender, setShow] = useState(true);

  return (
    <Flexbox gap={12} id={id} width={'100%'}>
      <Flexbox horizontal>
        {tools?.map((tool) => <Flexbox key={tool.identifier}>{tool.identifier}</Flexbox>)}
      </Flexbox>
      {/*<Inspector showRender={showRender} {...fcProps} setShow={setShow} />*/}
      {/*{showRender && (*/}
      {/*  <PluginRender*/}
      {/*    content={content}*/}
      {/*    id={id}*/}
      {/*    identifier={plugin?.identifier}*/}
      {/*    loading={fcProps.loading}*/}
      {/*    payload={fcProps.command}*/}
      {/*    type={fcProps.type}*/}
      {/*  />*/}
      {/*)}*/}
    </Flexbox>
  );
});
