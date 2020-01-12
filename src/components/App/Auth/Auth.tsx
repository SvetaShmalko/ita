import React, { useState } from "react";
import {
  Dialog,
  makeStyles,
  Tabs,
  Box,
  Tab,
  Typography,
  AppBar
} from "@material-ui/core";
import styled from "styled-components";
import Signup from "./Signup/Signup";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SignIn from "./Signin/Signin";
import { signOutUser } from "../../../store/auth/actionCreators";
import { SigninInterface } from "@components/App/Auth/Signin/Interfaces/SignInInterface";

const CloseIcon = styled.i`
  position: absolute;
  color: #9ba6b2;
  font-size: 24px;
  right: 0;
  top: 0;
  padding: 10px;
  &:hover {
    color: #20233f;
  }
`;
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

const AuthPopUp = ({ signOutUser }: any) => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(true);
  const [value, setValue] = useState(0);

  const handleSignOut = (e: React.ChangeEvent<{}>) => {
    e.preventDefault();
    signOutUser();
  };

  const handleChange = (e: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <Dialog open={isOpen}>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="SIGN IN" {...a11yProps(0)} />
              <Tab label="SIGN UP" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <SignIn />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Signup />
          </TabPanel>
        </div>
        <CloseIcon className="fas fa-times" onClick={() => setOpen(false)} />
        <button onClick={handleSignOut} className="signOut">
          Sign out
        </button>
      </Dialog>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ signOutUser }, dispatch);
};
export default connect(null, mapDispatchToProps)(AuthPopUp);
