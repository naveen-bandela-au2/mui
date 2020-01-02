import React from "react";
import { Paper } from "@material-ui/core";
const ImageHolder=(props)=> {
    return (
      <Paper style={{width:props.props.width||'500px', height:props.props.height||'300px', position: 'relative', overflow: 'hidden'}}>
        <img width={props.props.width||"500px"} height={props.props.height||"300px"} alt={props.src} src={props.src} />
      </Paper>
    );
  }
  export default ImageHolder;