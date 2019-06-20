import React from "react";

const UserData = props => (
  <ol>
    {props.data.map(item => (
      <li key={item.id}>
        <img src={item.images.thumbnail.url} alt="imageP" />
      </li>
    ))}
  </ol>
);

export default UserData;
