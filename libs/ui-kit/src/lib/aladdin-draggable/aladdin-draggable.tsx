import React, { HTMLAttributes } from 'react';
import './aladdin-draggable.scss';
import { useDrag } from 'react-dnd';

import { ItemTypes } from '@aladdin/domain-models';
export interface IAladdinDraggableProps extends HTMLAttributes<HTMLDivElement> {
  ref?: string;
  data?: {};
  id: string;
  end: (item: any, monitor: any) => void;
}

export const AladdinDraggable: React.FC<IAladdinDraggableProps> = (
  props: IAladdinDraggableProps
) => {
  /* Using React DND useDrag Hook */
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.SampleDatasets, data: props.data, id: props.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),

    end: (item, monitor) => {
      props.end(item, monitor);
    },
  });
  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      {props.children}
    </div>
  );
};

export default AladdinDraggable;
