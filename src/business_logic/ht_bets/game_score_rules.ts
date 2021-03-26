import GameScore from '../../types/game_score';

export default class GameScoreRules {
    public gameScore !:GameScore;

    public setGameScore(score:GameScore) {
      this.gameScore = score;
    }

    public homeWins():boolean {
      return this.gameScore.fullTime.home > this.gameScore.fullTime.away;
    }

    public whoWins():string {
      if (this.homeWins()) return this.gameScore.home;
      return this.gameScore.away;
    }

    public homeWinsHT():boolean {
      return this.gameScore.firstHalf.home > this.gameScore.firstHalf.away;
    }

    public whoWinsHT():string {
      if (this.homeWinsHT()) return this.gameScore.home;
      return this.gameScore.away;
    }

    public awayWinsHt():boolean {
      if (!this.homeWinsHT()) return true;
      return false;
    }

    public homeWinsSecondHalf():boolean {
      return this.gameScore.secondHalf.home > this.gameScore.secondHalf.away;
    }

    public awayWinsSecondHalf():boolean {
      if (!this.homeWinsSecondHalf()) return true;
      return false;
    }

    public whoWinsSecondHalf():string {
      return this.homeWinsSecondHalf()
        ? this.gameScore.home
        : this.gameScore.away;
    }

    public drawHT():boolean {
      return this.gameScore.firstHalf.away === this.gameScore.firstHalf.home;
    }

    public drawSecondHalf() :boolean {
      return this.gameScore.secondHalf.home === this.gameScore.secondHalf.away;
    }

    public homeHTDoubleChance():boolean {
      if (this.whoWinsHT() === this.gameScore.home || this.drawHT()) return true;
      return false;
    }

    public awayHTDoubleChance():boolean {
      if (this.whoWinsHT() === this.gameScore.away || this.drawHT()) return true;
      return false;
    }

    public homeAwayDoubleChance():boolean {
      return !this.drawHT();
    }

    public htHomeScores():boolean {
      return this.gameScore.firstHalf.home > 0;
    }

    public htAwayScores():boolean {
      return this.gameScore.firstHalf.away > 0;
    }

    public htDrawWithGoals():boolean {
      return this.drawHT() && this.htHomeScores() && this.htAwayScores();
    }

    public htDrawNoGoals():boolean {
      return this.drawHT() && !this.htHomeScores() && !this.htAwayScores();
    }

    public homeWinsHTBothTeamsScore():boolean {
      return this.homeWinsHT() && this.htHomeScores() && this.htAwayScores();
    }

    public homeWinsHTAwayNoGoal():boolean {
      return this.homeWinsHT() && !this.htAwayScores();
    }

    public awayWinsHTBothScore():boolean {
      return this.awayWinsHt() && this.htHomeScores() && this.htAwayScores();
    }

    public awayWinsHTHomeNoGoal():boolean {
      return this.awayWinsHt() && !this.htAwayScores();
    }

    private htTotalGoals():number {
      return this.gameScore.firstHalf.home + this.gameScore.firstHalf.away;
    }

    public homeWinsHTTotalGoalsOver(over:number) {
      return this.homeWinsHT() && this.htTotalGoals() > over;
    }

    public awayWinsHTTotalGoalsOver(over:number) {
      return this.awayWinsHt() && this.htTotalGoals() > over;
    }

    public homeWinsHTTotalGoalsUnder(under:number) {
      return this.homeWinsHT() && this.htTotalGoals() < under;
    }

    public awayWinsHTTotalGoalsUnder(under:number) {
      return this.awayWinsHt() && this.htTotalGoals() < under;
    }
}
