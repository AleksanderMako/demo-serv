import Score from './score';

export default class GameScore {
    public firstHalf!:Score;

    public secondHalf!:Score;

    public fullTime!:Score;

    public home!:string;

    public away!:string;

    // will expect only the result key here
    public setScores(data:any) {
      this.firstHalf = new Score();
      this.secondHalf = new Score();
      this.fullTime = new Score();
      this.firstHalf.setScore(data['1']);
      this.secondHalf.setScore(data['2']);
      this.fullTime.setScore(data['3']);
    }

    public setHomeAway(data:any) {
      this.home = data.home.name;
      this.away = data.away.name;
    }
}
