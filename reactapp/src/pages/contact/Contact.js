import { Button, Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, cssTransition, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isEmail, isMobilePhone } from "validator";
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
      "& fieldset": {
        transition: "border-color 0.5s ease, border-width 0.5s ease",
        borderColor: "var(--primary)",
        borderStyle: "solid",
        borderWidth: "1px", // add initial borderWidth
      },
      "&:hover fieldset": {
        borderColor: "var(--tertiary)", // Add a lighter color on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "var(--tertiary)", // Use the same color as when focused
      },
      "& input": {
        fontSize: 16, // Slightly increase font size
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
  errorField: {
    "& .MuiOutlinedInput-root fieldset": {
      transition: "border-color 0.5s ease, border-width 0.5s ease",
      borderColor: "red",
      borderWidth: 1.8,
    },
  },
});

const Fade = cssTransition({
  enter: "fadeIn", // this will refer to a CSS class
  exit: "fadeOut",
  duration: [200, 200], // [enterDuration, exitDuration]
});

const toastConfig = {
  autoClose: 1500,
  transition: Fade,
  className: "toast",
  hideProgressBar: true,
  closeButton: false,
};

const FormField = ({
  label,
  value,
  setValue,
  required = false,
  multiline = false,
  rows = 1,
  error = false,
}) => {
  const classes = useFieldStyles();
  return (
    <TextField
      className={`${classes.textField} ${error ? classes.errorField : ""}`}
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
  const [errorFields, setErrorFields] = useState({});
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
    const errors = {};
    if (formState.phone.length > 0 && !isMobilePhone(formState.phone)) {
      errors.phone = true;
    }
    if (!isEmail(formState.email)) {
      errors.email = true;
    }

    setErrorFields(errors);
    setTimeout(() => {
      setErrorFields({});
    }, 1000);

    const erroredFields = Object.keys(errors);
    if (erroredFields.length !== 0) {
      const errorMsg = `
      The following fields require your attention: ${erroredFields.join(", ")}
      `;
      toast.error(errorMsg, toastConfig);
      return;
    }
    const headers = {
      "Content-Type": "application/json",
    };
    console.log(formState, headers);
    axios
      .post(process.env.REACT_APP_FORM_ENDPOINT, formState, {
        headers: headers,
      })
      .then((resp) => {
        if (resp.status === 200) {
          toast.success("Success!", toastConfig);
        }
      })
      .catch((err) => {
        toast.error("Message not sent!", toastConfig);
      });
  };

  return (
    <div className="contact-container">
      <ToastContainer />
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
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                label="Phone Number"
                value={formState.phone}
                setValue={(value) => updateField("phone", value)}
                error={errorFields.phone}
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                label="Email"
                value={formState.email}
                setValue={(value) => updateField("email", value)}
                required
                error={errorFields.email}
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
