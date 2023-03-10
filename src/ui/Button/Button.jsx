import React from "react";
import clsx from "clsx";
import s from "./Button.module.sass";

export const Button = ({
  className,
  text,
  background,
  small,
  medium,
  large,
  arrow,
  border,
}) => {
  return (
    <button
      className={clsx(s.button, className, {
        [s.button__large]: large,
        [s.button__medium]: medium,
        [s.button__small]: small,
        [s.button__gray]: background === 'gray',
        [s.button__green]: background === 'green',
        [s.button__red]: background === 'red',
        [s.button__orange]: background === 'orange',
        [s.button__border_red] : border === 'red',
        [s.button__border_green] : border === 'green',
        [s.button__border_gray] : border === 'gray',
        [s.button__border_orange] : border === 'orange',
      })}
    >
      {text}
    </button>
  );
};
