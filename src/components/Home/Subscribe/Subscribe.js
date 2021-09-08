import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Subscribe = () => {
  const classes = useStyles();

  return (
    <section id="contact" className="container" style={{ marginTop: "100px" }}>
      <div className="text-center">
        <div className="font-cursive main-text fs-1 fw-bold">Contact</div>
        <div className="fs-3 fw-bold">
          Contact with us and <br /> Let us work with You!
        </div>
      </div>

      <div className="mt-3">
        <form
          action="https://formspree.io/f/xnqlojoa"
          method="POST"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <div className="card w-50 px-5 py-5 mx-auto border-primary border-2 rounded-3 mt-5">
            <TextField id="standard-basic" label="Your Name" />
            <br />
            <TextField id="standard-basic" label="Your Email" />
            <br />
            <TextField
              id="standard-multiline-static"
              label="Your Message"
              multiline
              rows={3}
            />
            <br />
            <div className="text-center d-grid gap-2">
              <button
                type="submit"
                className="btn btn-primary px-5 rounded-3 mt-3"
              >
                Send
              </button>
            </div>
          </div>
          {/* <div className="form-group"> */}
          {/* <label htmlFor="name" className="fs-6 text-primary">
              Your Name
            </label> */}
          {/* <input
              type="text"
              name="name"
              className="form-control text-dark border-primary rounded-3"
            /> */}
          {/* </div> */}
          {/* <div className="form-group">
            <label htmlFor="name" className="fs-6 text-primary mt-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control text-dark border-primary rounded-3"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name" className="fs-6 text-primary mt-2">
              Your Message
            </label>
            <textarea
              name="message"
              className="form-control text-dark border-primary rounded-3"
              rows="4"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary px-5 rounded-3 mt-3"
            >
              Send
            </button>
          </div> */}
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
