import React from "react";
// check the season

const seasonConfig = {
  summer: {
    text: "Let's go to the beach, and eat some peach",
    iconName: "sun"
  },
  winter: {
    text: "Baby, it's cold outside",
    iconName: "snowflake"
  }
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  console.log("text", text);
  console.log("iconname", iconName);
  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
