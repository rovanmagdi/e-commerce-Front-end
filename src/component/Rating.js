import React from 'react';
import StarIcon from "@material-ui/icons/Star";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    star:
    {
      color: "#FFD36E",
  
    }
  }));
const Rating = (props) => {
  const classes = useStyles();

    const {rating}=props;
    return (
        <div>
            {rating===1 
            ?<span className={classes.star}>< StarIcon/></span>
             :rating===2 
             ? <span className={classes.star}><StarIcon/><StarIcon/></span>
             :rating===3
             ?<span className={classes.star}><StarIcon/><StarIcon/><StarIcon/></span>
            :rating===4
            ?<span className={classes.star}><StarIcon/><StarIcon/><StarIcon/><StarIcon/></span>
        :<span className={classes.star}><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></span>}
        </div>
    );
};

export default Rating;