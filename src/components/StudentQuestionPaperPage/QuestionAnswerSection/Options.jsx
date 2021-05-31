import React, { useContext, useState } from "react";
import "./QuestionAnswerSection.css";
import { FormControlLabel, Typography } from "@material-ui/core";
import { createStyles } from "@material-ui/core/styles";
import StyledOptionRadioButton from "./StyledOptionRadioButton";
import { StudentQuestionAnswerContext } from "../../../context/StudentQuestionAnswerContext";
import { StudentAnswersheetContext } from "../../../context/StudentAnswersheetContext";

const styles = createStyles({
  formControlLabel: {
    fontFamily: "Montserrat",
    fontSize: "15px",
    fontStyle: "normal",
    textAlign: "justify",
    fontWeight: "normal",
    lineHeight: "18px",
    color: "#000000",
    "& label": { fontSize: "0.6rem" },
  },
});

function Options(props) {
  return (
    <FormControlLabel
      className={"Options"}
      id={props.index}
      value={props.optionValue}
      control={<StyledOptionRadioButton />}
      label={
        <Typography style={styles.formControlLabel}>
          {props.optionValue}
        </Typography>
      }
    />
  );
}

export default Options;
