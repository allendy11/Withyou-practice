import React from "react";

const LinkToGithub = ({ github, name }) => {
  return (
    <a href={`https://github.com/${github}`} rel="noreferrer" target="_blank">
      <span>{name}</span>
    </a>
  );
};

export default LinkToGithub;
