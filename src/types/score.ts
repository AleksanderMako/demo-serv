export default class Score {
    public home!:number;

    public away!:number;

    public setScore(data:any) {
      this.home = Number(data.home);
      this.away = Number(data.away);
    }
}
