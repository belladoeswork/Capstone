import React from "react";
// import css from "../css/modules/howToScreen.module.scss";
import Link from "next/link.js";

// import { Button, Grid, Container, Typography } from "@material-ui/core";
// import { CheckCircleOutline as IconBack } from "@material-ui/icons";


export default function HowToScreen(){

  return (
    <div className="main-container">
      <div className={`${css.title} ${css.title1}`}>How to Play</div>

      <Container className={css.mainContent}>
        <Grid container>
          <Grid item xs={12} sm={12} md={4}>
            <HowToSwap />
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Typography className={`${css.explainer} ${css.explainerRight}`}>
              The goal of Figure Five Frenzy is simple. Take the four cards you receive and find a way to combine them into a mathematical statement that equals the target card in red. Once you have the solution in place, click the red card. You can drag and drop cards to put them in the order you need.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={8} className={css.rowRightTextCol}>
            <Typography className={css.explainer}>
              Use operators like +, −, × and ÷ to create your equation. Click on the round operator icons to cycle through the operators. When you have the solution, don't forget to tap the red target card to finish the round!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HowToOps/>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={4}>
            <HowToParens />
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Typography className={`${css.explainer} ${css.explainerRight}`}>
              Grouping your numbers is critical. Use the grouping buttons below the cards to add parantheses to your equation. Remember the proper order of operations and how that determines how the value will be calculated. Setting your grouping correctly can save you lots of time.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={8} className={css.rowRightTextCol}>
            <Typography className={css.explainer}>
              In speaking of time, you're racing the clock in this game. Every time you click the red card and solve a round, you have new time added. Don't let the time run out! If you're stumped, just click the Quit button to finish the game and, if you did well enough, submit your score to the high scores table.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HowToClock/>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <div className={css.btnGeneralWrap}>
              <Link to="/">
                <Button className={css.btnGeneral}>
                  <IconBack className={css.btnIcon} />
                  <span>Back</span>
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>



    </div>
  );
};
