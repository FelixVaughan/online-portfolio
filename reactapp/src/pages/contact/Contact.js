import React, { useState, useEffect } from "react";
import { Button, TextField, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./contact.css";

const fieldColor = "#eee";

const useFormStyles = makeStyles({
  form: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    maxWidth: "45%",
    border: "1px solid var(--primary)",
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    padding: "20px",
    backgroundColor: "var(--primary)",
  },
});

const useFieldStyles = makeStyles({
  textField: {
    "& .MuiOutlinedInput-root": {
      // Use color theme instead of hardcoding the color
      "& fieldset": {
        borderColor: "var(--primary)",
        borderStyle: "solid",
      },
      "&:hover fieldset": {
        borderColor: "var(--tertiary)", // Add a lighter color on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "var(--tertiary)", // Use the same color as when focused
      },
      "& input": {
        fontSize: 16, // Slightly increase font size
        fontWeight: "bld",
        color: "black",
        backgroundColor: fieldColor,
        "&::placeholder": {
          fontSize: 16,
          fontWeight: 300,
        },
      },
    },
    "& .MuiInputLabel-root": {
      "&.MuiInputLabel-shrink": {
        fontSize: 16, // Increase font size when label shrinks
        color: "var(--tertiary)",
      },
    },
  },
});

const FormField = ({
  label,
  value,
  setValue,
  required = false,
  multiline = false,
  rows = 1,
}) => {
  const classes = useFieldStyles();
  return (
    <TextField
      className={classes.textField}
      label={label}
      variant="outlined"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      fullWidth
      sx={{ backgroundColor: fieldColor }}
      required={required}
      multiline={multiline}
      rows={rows}
    />
  );
};
export default function Contact() {
  const classes = useFormStyles();
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const updateField = (field, value) => {
    setFormState({
      ...formState,
      [field]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic goes here
  };

  return (
    <div className="contact-container">
      <div className="contact-text-content">
        <h1>Get In Touch</h1>
        <p>Let's connect! Fill out the form, and I'll get back to you.</p>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid
            container
            className={classes.container}
            spacing={2}
            justify="center"
          >
            <Grid item xs={12} sm={6}>
              <FormField
                label="First Name"
                value={formState.firstName}
                setValue={(value) => updateField("firstName", value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField
                label="Last Name"
                value={formState.lastName}
                setValue={(value) => updateField("lastName", value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                label="Company"
                value={formState.company}
                setValue={(value) => updateField("company", value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                label="Phone Number"
                value={formState.phone}
                setValue={(value) => updateField("phone", value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                label="Email"
                value={formState.email}
                setValue={(value) => updateField("email", value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                label="Short Message"
                value={formState.message}
                setValue={(value) => updateField("message", value)}
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ width: "15%", height: "110%" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}
