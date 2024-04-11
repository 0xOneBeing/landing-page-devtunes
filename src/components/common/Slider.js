import { useState } from "react";
import { CSSTransitionGroup } from "react-transition-group";

export default function Slider({ items, active }) {
  const [state, setState] = useState({
    items: items,
    active: active,
    direction: "",
  });

  const generateItems = () => {
    let generatedItems = [];
    let level;

    for (let i = state.active - 2; i < state.active + 3; i++) {
      let index = i;
      if (i < 0) {
        index = state.items.length + i;
      } else if (i >= state.items.length) {
        index = i % state.items.length;
      }
      level = state.active - i;
      generatedItems.push(
        <Item key={index} id={state.items[index]} level={level} />
      );
    }
    return generatedItems;
  };

  const moveLeft = () => {
    let newActive = state.active;
    newActive--;
    setState({
      ...state,
      active: newActive < 0 ? state.items.length - 1 : newActive,
      direction: "left",
    });
  };

  const moveRight = () => {
    let newActive = state.active;
    setState({
      ...state,
      active: (newActive + 1) % state.items.length,
      direction: "right",
    });
  };

  return (
    <div id="carousel" className="noselect">
      <div className="arrow arrow-left" onClick={moveLeft}>
        <i className="fi-arrow-left"></i>
      </div>
      <CSSTransitionGroup
        transitionName={state.direction}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {generateItems()}
      </CSSTransitionGroup>
      <div className="arrow arrow-right" onClick={moveRight}>
        <i className="fi-arrow-right"></i>
      </div>
    </div>
  );
}

const Item = ({ id, level }) => {
  const className = `item level${level}`;
  return <div className={className}>{id}</div>;
};
