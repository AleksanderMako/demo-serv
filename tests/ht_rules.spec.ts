/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import GameScoreRules from '../src/business_logic/ht_bets/game_score_rules';
import GameScore from '../src/types/game_score';

/* globals describe,it */
describe('half time game rules', () => {
  const data = {
    success: 1,
    results: [{
      id: '233630',
      time: '1490558400',
      time_status: '3',
      league: { id: '251', name: 'Venezuela Primera Division', cc: 've' },
      home: {
        id: '4089', name: 'Monagas', image_id: '6233', cc: 've',
      },
      away: {
        id: '1413', name: 'Anzoategui', image_id: '7742', cc: 've',
      },
      ss: '1-0',
      scores: { 1: { home: '0', away: '0' }, 2: { home: '1', away: '0' }, 3: { home: '1', away: '0' } },
      stats: {},
      events: [],
      extra: {
        home_pos: '7', away_pos: '8', round: '7', pitch: 'Good', weather: 'Hot', stadium: 'Monumental',
      },
    }],
  };
  describe('home wins ', () => {
    it('should be true ', () => {
      const gsRules = new GameScoreRules();
      const gs = new GameScore();
      gs.setScores(data.results[0].scores);

      gs.setHomeAway(data.results[0]);

      gsRules.setGameScore(gs);

      const homeWins = gsRules.homeWins();
      expect(homeWins).is.true;
    });
  });

  describe('ht draw', () => {
    it('should be true', () => {
      const gsRules = new GameScoreRules();
      const gs = new GameScore();
      gs.setScores(data.results[0].scores);

      gs.setHomeAway(data.results[0]);

      gsRules.setGameScore(gs);

      const res = gsRules.drawHT();
      expect(res).is.true;
    });
  });

  describe('ht draw no goals', () => {
    it('should be true', () => {
      const gsRules = new GameScoreRules();
      const gs = new GameScore();
      gs.setScores(data.results[0].scores);

      gs.setHomeAway(data.results[0]);

      gsRules.setGameScore(gs);

      // eslint-disable-next-line no-unused-expressions
      expect(gsRules.htDrawNoGoals()).is.true;
    });
  });

  describe('ht home wins', () => {
    it('should be false', () => {
      const gsRules = new GameScoreRules();
      const gs = new GameScore();
      gs.setScores(data.results[0].scores);

      gs.setHomeAway(data.results[0]);

      gsRules.setGameScore(gs);

      const homeWins = gsRules.homeWinsHT();
      // eslint-disable-next-line no-unused-expressions
      expect(homeWins).is.false;
    });
  });

  describe('ht draw with goals', () => {
    it('should be false', () => {
      const gsRules = new GameScoreRules();
      const gs = new GameScore();
      gs.setScores(data.results[0].scores);

      gs.setHomeAway(data.results[0]);

      gsRules.setGameScore(gs);

      const homeWins = gsRules.htDrawWithGoals();
      // eslint-disable-next-line no-unused-expressions
      expect(homeWins).is.false;
    });
  });

  describe('ht draw no goals', () => {
    it('should be true', () => {
      const gsRules = new GameScoreRules();
      const gs = new GameScore();
      gs.setScores(data.results[0].scores);

      gs.setHomeAway(data.results[0]);

      gsRules.setGameScore(gs);

      const homeWins = gsRules.htDrawNoGoals();
      // eslint-disable-next-line no-unused-expressions
      expect(homeWins).is.true;
    });
  });
});
