import React from "react";
import { Link } from "react-router-dom";

function SubItem(props) {
  return (
    //<a className="collapse-item" href={ props.href }>{ props.titolo }</a>
    <Link to={props.link} className="collapse-item">
      {props.titolo}
    </Link>
  );
}

export default SubItem;
