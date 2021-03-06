import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import AddQuestionnaireForm from './AddQuestionnaireForm';
import { IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,

  },
  tab: {
    fontSize: 12,
    color: "#5f6368",
    textTransform: "capitalize",
    height: 10,
    fontWeight: "600",
    fontFamily: 'Google Sans,Roboto,Arial,sans-serif',

  },
  tabs: {
    height: 10

  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (

        <div>{children}</div>

      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function AddField() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <Paper className={classes.root}>

      <TabPanel value={value} index={0}>
        <AddQuestionnaireForm />


      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="submit" style={{ height: "76vh" }}>
          <div className="user_form" >
            <div className="user_form_section">



              <div className="user_form_questions" style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                  <Typography style={{ fontSize: "15px", fontWeight: "400", letterSpacing: '.1px', lineHeight: '24px', paddingBottom: "8px", fontSize: "24px" }} >3
                    s</Typography>
                  <div  >
                    <IconButton>
                      <MoreVertIcon className="form_header_icon" />
                    </IconButton>
                  </div>
                </div>
                <br></br>
              </div>
            </div>

          </div>
        </div>
      </TabPanel>
    </Paper>
  );
}