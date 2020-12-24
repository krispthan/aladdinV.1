import React, { ReactNode } from "react";
import { useDrop } from "react-dnd";
import "./aladdin-droppable.scss";

export interface AladdinDroppableProps {
  classes?: string;
  children: ReactNode;
  accept: string;
  id: string;
}
export const AladdinDroppable: React.FC<AladdinDroppableProps> = (
  props: AladdinDroppableProps
) => {
  {
    /* Using React DND useDrop Hoo
    Will allow us to check which element is being dropped over 
    k */
    const [{ canDrop, isOver }, drop] = useDrop({
      accept: props.accept,
      drop: () => ({ id: props.id }),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        getDropResult: monitor.getDropResult(),
      }),
    });
    return (
      <div className={props.classes} ref={drop}>
        {props.children}
      </div>
    );
  }
};

export default AladdinDroppable;
