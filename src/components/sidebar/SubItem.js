import React from "react";
import { Link } from "react-router-dom";

function SubItem(props) {
  return (
    //<a className="collapse-item" href={ props.href }>{ props.titolo }</a>
    <Link to="/blank" className="collapse-item">
      {props.titolo}
    </Link>
  );
}

export default SubItem;
