import React from "react";
import Rating from "@material-ui/lab/Rating";

export default function SimpleRating(props) {
  return <Rating name="read-only" value={props.Rating} readOnly />;
}
