import React from "react";

const Loading = props => {
  return (
    <>
      <div class="ui active dimmer">
        <div class="ui big text loader" />
        <p> {props.message}</p>
      </div>
    </>
  );
};

Loading.defaultProps = {
  message: "Loading..."
};
export default Loading;
