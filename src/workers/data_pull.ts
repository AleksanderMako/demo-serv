/* eslint-disable no-plusplus */
import { Connection, EntityManager } from 'typeorm';
import Match from '../entities/match/match';
import MatchOdds from '../entities/odds/odds';

export default class DataWorker {
    private c:Connection;

    private manager:EntityManager;

    /**
     *
     */
    constructor(conn:Connection) {
      this.c = conn;
      this.manager = this.c.manager;
    }

    public async seedMatches() {
      const teams = ['Liverpool', 'Everton', 'Arsenal', 'FullHam', 'Burnley', 'Wolves', 'Chelsea', 'Manchester United', 'Manchester City', 'New Castle', 'Stoke City', 'Derby County'];
      const matches:Match[] = [];
      const dummyOdds:string = DataWorker.getDummyOdds();

      for (let i = 0; i < teams.length; i++) {
        for (let j = 1; j < teams.length; j++) {
          const mId = `${i}${j}`;
          const match = this.manager.create(Match, {
            matchId: mId,
            home: teams[i],
            away: teams[j],
            odds: this.manager.create(MatchOdds, {
              matchId: mId,
              odds: dummyOdds,
            }),
            league: 'Premier league',
          });
          matches.push(match);
        }
      }
      await this.manager.save(matches);
    }

    private static getDummyOdds():any {
      return {
        success: 1,
        results: [{
          FI: '65404844',
          event_id: '308244',
          asian_lines: {
            updated_at: '1498201954',
            sp: {
              asian_handicap: [{ opp: '-1.0, -1.5', odds: '1.830', header: 'Home' }, { opp: '+1.0, +1.5', odds: '2.070', header: 'Away' }], goal_line: [{ goals: '3.0', odds: '1.920', header: 'Over' }, { goals: '3.0', odds: '1.980', header: 'Under' }], alternative_asian_handicap: [{ opp: '-3.0, -3.5', odds: '6.400', header: 'Home' }, { opp: '+3.0, +3.5', odds: '1.115', header: 'Away' }, { opp: '-3.0', odds: '6.000', header: 'Home' }, { opp: '+3.0', odds: '1.125', header: 'Away' }, { opp: '-2.5, -3.0', odds: '4.250', header: 'Home' }, { opp: '+2.5, +3.0', odds: '1.210', header: 'Away' }, { opp: '-2.5', odds: '3.450', header: 'Home' }, { opp: '+2.5', odds: '1.300', header: 'Away' }, { opp: '-2.0, -2.5', odds: '3.100', header: 'Home' }, { opp: '+2.0, +2.5', odds: '1.350', header: 'Away' }, { opp: '-2.0', odds: '2.750', header: 'Home' }, { opp: '+2.0', odds: '1.425', header: 'Away' }, { opp: '-1.5, -2.0', odds: '2.300', header: 'Home' }, { opp: '+1.5, +2.0', odds: '1.600', header: 'Away' }, { opp: '-1.5', odds: '2.025', header: 'Home' }, { opp: '+1.5', odds: '1.775', header: 'Away' }, { opp: '-1.0', odds: '1.550', header: 'Home' }, { opp: '+1.0', odds: '2.375', header: 'Away' }, { opp: '-0.5, -1.0', odds: '1.450', header: 'Home' }, { opp: '+0.5, +1.0', odds: '2.675', header: 'Away' }, { opp: '-0.5', odds: '1.375', header: 'Home' }, { opp: '+0.5', odds: '3.000', header: 'Away' }, { opp: '0.0, -0.5', odds: '1.240', header: 'Home' }, { opp: '0.0, +0.5', odds: '3.900', header: 'Away' }, { opp: '0.0', odds: '1.120', header: 'Home' }, { opp: '0.0', odds: '6.250', header: 'Away' }, { opp: '0.0, +0.5', odds: '1.105', header: 'Home' }, { opp: '0.0, -0.5', odds: '6.800', header: 'Away' }], alternative_goal_line: [{ goals: '1.0, 1.5', odds: '1.105', header: 'Over' }, { goals: '1.0, 1.5', odds: '6.800', header: 'Under' }, { goals: '1.5', odds: '1.180', header: 'Over' }, { goals: '1.5', odds: '4.650', header: 'Under' }, { goals: '1.5, 2.0', odds: '1.210', header: 'Over' }, { goals: '1.5, 2.0', odds: '4.250', header: 'Under' }, { goals: '2.0', odds: '1.250', header: 'Over' }, { goals: '2.0', odds: '3.800', header: 'Under' }, { goals: '2.0, 2.5', odds: '1.425', header: 'Over' }, { goals: '2.0, 2.5', odds: '2.750', header: 'Under' }, { goals: '2.5', odds: '1.575', header: 'Over' }, { goals: '2.5', odds: '2.350', header: 'Under' }, { goals: '2.5, 3.0', odds: '1.725', header: 'Over' }, { goals: '2.5, 3.0', odds: '2.075', header: 'Under' }, { goals: '3.0, 3.5', odds: '2.200', header: 'Over' }, { goals: '3.0, 3.5', odds: '1.650', header: 'Under' }, { goals: '3.5', odds: '2.375', header: 'Over' }, { goals: '3.5', odds: '1.550', header: 'Under' }, { goals: '3.5, 4.0', odds: '2.850', header: 'Over' }, { goals: '3.5, 4.0', odds: '1.400', header: 'Under' }, { goals: '4.0', odds: '3.550', header: 'Over' }, { goals: '4.0', odds: '1.275', header: 'Under' }, { goals: '4.0, 4.5', odds: '3.900', header: 'Over' }, { goals: '4.0, 4.5', odds: '1.240', header: 'Under' }, { goals: '4.5', odds: '4.250', header: 'Over' }, { goals: '4.5', odds: '1.210', header: 'Under' }, { goals: '4.5, 5.0', odds: '5.500', header: 'Over' }, { goals: '4.5, 5.0', odds: '1.150', header: 'Under' }], '1st_half_asian_handicap': [{ opp: '-0.5', odds: '1.875', header: 'Home' }, { opp: '+0.5', odds: '1.975', header: 'Away' }], '1st_half_goal_line': [{ goals: '1.0, 1.5', odds: '1.950', header: 'Over' }, { goals: '1.0, 1.5', odds: '1.900', header: 'Under' }], alternative_1st_half_asian_handicap: [{ opp: '-1.5, -2.0', odds: '5.900', header: 'Home' }, { opp: '+1.5, +2.0', odds: '1.130', header: 'Away' }, { opp: '-1.5', odds: '4.150', header: 'Home' }, { opp: '+1.5', odds: '1.220', header: 'Away' }, { opp: '-1.0, -1.5', odds: '3.550', header: 'Home' }, { opp: '+1.0, +1.5', odds: '1.275', header: 'Away' }, { opp: '-1.0', odds: '3.000', header: 'Home' }, { opp: '+1.0', odds: '1.375', header: 'Away' }, { opp: '-0.5, -1.0', odds: '2.200', header: 'Home' }, { opp: '+0.5, +1.0', odds: '1.650', header: 'Away' }, { opp: '0.0, -0.5', odds: '1.525', header: 'Home' }, { opp: '0.0, +0.5', odds: '2.425', header: 'Away' }, { opp: '0.0', odds: '1.220', header: 'Home' }, { opp: '0.0', odds: '4.150', header: 'Away' }, { opp: '0.0, +0.5', odds: '1.160', header: 'Home' }, { opp: '0.0, -0.5', odds: '5.250', header: 'Away' }, { opp: '+0.5', odds: '1.120', header: 'Home' }, { opp: '-0.5', odds: '6.250', header: 'Away' }], alternative_1st_half_goal_line: [{ goals: '0.5, 1.0', odds: '1.350', header: 'Over' }, { goals: '0.5, 1.0', odds: '3.100', header: 'Under' }, { goals: '1.0', odds: '1.525', header: 'Over' }, { goals: '1.0', odds: '2.425', header: 'Under' }, { goals: '1.5', odds: '2.250', header: 'Over' }, { goals: '1.5', odds: '1.625', header: 'Under' }, { goals: '1.5, 2.0', odds: '2.750', header: 'Over' }, { goals: '1.5, 2.0', odds: '1.425', header: 'Under' }, { goals: '2.0', odds: '3.900', header: 'Over' }, { goals: '2.0', odds: '1.240', header: 'Under' }, { goals: '2.0, 2.5', odds: '4.500', header: 'Over' }, { goals: '2.0, 2.5', odds: '1.190', header: 'Under' }, { goals: '2.5', odds: '5.250', header: 'Over' }, { goals: '2.5', odds: '1.160', header: 'Under' }, { goals: '2.5, 3.0', odds: '7.000', header: 'Over' }, { goals: '2.5, 3.0', odds: '1.100', header: 'Under' }],
            },
          },
          goals: {
            updated_at: '1498201969',
            sp: {
              goals_over_under: [{ goals: '2.5', odds: '1.53', header: 'Over' }, { goals: '2.5', odds: '2.40', header: 'Under' }], alternative_total_goals: [{ goals: '0.5', odds: '1.03', header: 'Over ' }, { goals: '0.5', odds: '15.00', header: 'Under' }, { goals: '1.5', odds: '1.17', header: 'Over ' }, { goals: '1.5', odds: '5.00', header: 'Under' }, { goals: '3.5', odds: '2.38', header: 'Over ' }, { goals: '3.5', odds: '1.53', header: 'Under' }, { goals: '4.5', odds: '4.33', header: 'Over ' }, { goals: '4.5', odds: '1.20', header: 'Under' }, { goals: '5.5', odds: '9.00', header: 'Over ' }, { goals: '5.5', odds: '1.07', header: 'Under' }, { goals: '6.5', odds: '19.00', header: 'Over ' }, { goals: '6.5', odds: '1.02', header: 'Under' }], result_total_goals: [{ opp: 'Arsenal & Over 2.5', odds: '1.91' }, { opp: 'Arsenal & Under 2.5', odds: '4.00' }, { opp: 'Draw & Over 2.5', odds: '15.00' }, { opp: 'Draw & Under  2.5', odds: '6.00' }, { opp: 'Leicester & Over 2.5', odds: '13.00' }, { opp: 'Leicester & Under 2.5', odds: '17.00' }], total_goals_both_teams_to_score: [{ opp: 'Over 2.5 & Yes', odds: '2.20' }, { opp: 'Over 2.5 & No', odds: '4.75' }, { opp: 'Under 2.5 & Yes', odds: '10.00' }, { opp: 'Under 2.5 & No', odds: '2.88' }], exact_total_goals: [{ opp: '0 Goals', odds: '15.00' }, { opp: '1 Goal', odds: '6.50' }, { opp: '2 Goals', odds: '4.00' }, { opp: '3 Goals', odds: '4.00' }, { opp: '4 Goals', odds: '5.00' }, { opp: '5 Goals', odds: '8.00' }, { opp: '6 Goals', odds: '15.00' }, { opp: '7+ Goals', odds: '19.00' }], number_of_goals_in_match: [{ opp: 'Under 2 goals', odds: '5.00' }, { opp: '2 or 3 goals', odds: '2.10' }, { opp: 'Over 3 goals', odds: '2.38' }], both_teams_to_score: [{ opp: 'Yes', odds: '1.67' }, { opp: 'No', odds: '2.10' }], teams_to_score: [{ opp: 'Both Teams', odds: '1.80' }, { opp: 'Arsenal Only', odds: '2.30' }, { opp: 'No Goal', odds: '15.00' }, { opp: 'Leicester Only', odds: '15.00' }], both_teams_to_score_in_1st_half: [{ opp: 'Yes', odds: '4.33' }, { opp: 'No', odds: '1.20' }], both_teams_to_score_in_2nd_half: [{ opp: 'Yes', odds: '3.50' }, { opp: 'No', odds: '1.29' }], both_teams_to_score_1st_half_2nd_half: [{ opp: 'Yes / Yes', odds: '15.00' }, { opp: 'Yes / No', odds: '5.50' }, { opp: 'No / Yes', odds: '4.00' }, { opp: 'No / No', odds: '1.62' }], first_half_goals: [{ goals: '0.5', odds: '1.25', header: 'Over' }, { goals: '0.5', odds: '3.75', header: 'Under' }, { goals: '1.5', odds: '2.20', header: 'Over' }, { goals: '1.5', odds: '1.62', header: 'Under' }, { goals: '2.5', odds: '5.00', header: 'Over' }, { goals: '2.5', odds: '1.17', header: 'Under' }, { goals: '3.5', odds: '15.00', header: 'Over' }, { goals: '3.5', odds: '1.03', header: 'Under' }], exact_1st_half_goals: [{ opp: '0 Goals', odds: '3.75' }, { opp: '1 Goal', odds: '2.62' }, { opp: '2 Goals', odds: '3.60' }, { opp: '3 Goals', odds: '7.50' }, { opp: '4 Goals', odds: '21.00' }, { opp: '5+ Goals', odds: '34.00' }], first_team_to_score: [{ opp: 'Arsenal', odds: '1.29' }, { opp: 'No Goals', odds: '15.00' }, { opp: 'Leicester', odds: '3.75' }], '2nd_half_goals': [{ goals: '0.5', odds: '1.17', header: 'Over' }, { goals: '0.5', odds: '5.00', header: 'Under' }, { goals: '1.5', odds: '1.80', header: 'Over' }, { goals: '1.5', odds: '1.91', header: 'Under' }, { goals: '2.5', odds: '3.75', header: 'Over' }, { goals: '2.5', odds: '1.25', header: 'Under' }, { goals: '3.5', odds: '9.00', header: 'Over' }, { goals: '3.5', odds: '1.07', header: 'Under' }, { goals: '4.5', odds: '21.00', header: 'Over' }, { goals: '4.5', odds: '1.02', header: 'Under' }], exact_2nd_half_goals: [{ opp: '0 Goals', odds: '5.00' }, { opp: '1 Goal', odds: '3.00' }, { opp: '2 Goals', odds: '3.40' }, { opp: '3 Goals', odds: '5.50' }, { opp: '4 Goals', odds: '13.00' }, { opp: '5+ Goals', odds: '21.00' }], half_with_most_goals: [{ opp: '1st Half', odds: '2.88' }, { opp: '2nd Half', odds: '2.05' }, { opp: 'Tie', odds: '3.75' }], home_team_highest_scoring_half: [{ opp: 'Arsenal - 1st Half', odds: '3.00' }, { opp: 'Arsenal - 2nd Half', odds: '2.20' }, { opp: 'Arsenal - Tie', odds: '3.10' }], away_team_highest_scoring_half: [{ opp: 'Leicester - 1st Half', odds: '4.00' }, { opp: 'Leicester - 2nd Half', odds: '3.25' }, { opp: 'Leicester - Tie', odds: '1.80' }], home_team_exact_goals: [{ opp: 'Arsenal - 0 Goals', odds: '9.00' }, { opp: 'Arsenal - 1 Goal', odds: '3.75' }, { opp: 'Arsenal - 2 Goals', odds: '3.25' }, { opp: 'Arsenal - 3+ Goals', odds: '2.25' }], away_team_exact_goals: [{ opp: 'Leicester - 0 Goals', odds: '2.10' }, { opp: 'Leicester - 1 Goal', odds: '2.50' }, { opp: 'Leicester - 2 Goals', odds: '5.50' }, { opp: 'Leicester - 3+ Goals', odds: '15.00' }], goals_odd_even: [{ opp: 'Even', odds: '1.90' }, { opp: 'Odd', odds: '1.95' }], home_team_odd_even_goals: [{ opp: 'Arsenal - Even', odds: '1.83' }, { opp: 'Arsenal - Odd', odds: '1.83' }], away_team_odd_even_goals: [{ opp: 'Leicester - Even', odds: '1.57' }, { opp: 'Leicester - Odd', odds: '2.25' }], '1st_half_goals_odd_even': [{ opp: 'Odd', odds: '2.00' }, { opp: 'Even', odds: '1.80' }], last_team_to_score: [{ opp: 'Arsenal', odds: '1.29' }, { opp: 'No Goal', odds: '15.00' }, { opp: 'Leicester', odds: '3.75' }],
            },
          },
          half: {
            updated_at: '1498201985',
            sp: {
              half_time_result: [{ opp: '1', odds: '1.83' }, { opp: 'X', odds: '2.60' }, { opp: '2', odds: '6.50' }], half_time_double_chance: [{ opp: '1X', odds: '1.11' }, { opp: 'X2', odds: '1.83' }, { opp: '12', odds: '1.50' }], half_time_result_both_teams_to_score: [{ opp: 'Arsenal & Yes', odds: '11.00' }, { opp: 'Arsenal & No', odds: '2.10' }, { opp: 'Draw & Yes', odds: '7.50' }, { opp: 'Draw & No', odds: '3.60' }, { opp: 'Leicester & Yes', odds: '34.00' }, { opp: 'Leicester & No', odds: '7.50' }], half_time_result_total_goals: [{ opp: 'Arsenal & Over 1.5', odds: '3.40' }, { opp: 'Arsenal & Under 1.5', odds: '3.50' }, { opp: 'Draw & Over 1.5', odds: '8.00' }, { opp: 'Draw & Under 1.5', odds: '3.75' }, { opp: 'Leicester & Over 1.5', odds: '19.00' }, { opp: 'Leicester & Under 1.5', odds: '8.50' }], half_time_correct_score: [{ opp: '1-0', odds: '3.50', header: 'Home' }, { opp: '0-0', odds: '3.75', header: 'X' }, { opp: '1-0', odds: '8.50', header: 'Away' }, { opp: '2-0', odds: '6.50', header: 'Home' }, { opp: '1-1', odds: '8.00', header: 'X' }, { opp: '2-0', odds: '34.00', header: 'Away' }, { opp: '2-1', odds: '15.00', header: 'Home' }, { opp: '2-2', odds: '51.00', header: 'X' }, { opp: '2-1', odds: '34.00', header: 'Away' }, { opp: '3-0', odds: '17.00', header: 'Home' }, { opp: '3-0', odds: '151.00', header: 'Away' }, { opp: '3-1', odds: '41.00', header: 'Home' }, { opp: '3-1', odds: '151.00', header: 'Away' }, { opp: '3-2', odds: '101.00', header: 'Home' }, { opp: '3-2', odds: '251.00', header: 'Away' }, { opp: '4-0', odds: '51.00', header: 'Home' }, { opp: '4-1', odds: '81.00', header: 'Home' }, { opp: '4-2', odds: '351.00', header: 'Home' }, { opp: '5-0', odds: '151.00', header: 'Home' }, { opp: '5-1', odds: '351.00', header: 'Home' }], both_teams_to_score_in_1st_half: [{ opp: 'Yes', odds: '4.33' }, { opp: 'No', odds: '1.20' }], both_teams_to_score_in_2nd_half: [{ opp: 'Yes', odds: '3.50' }, { opp: 'No', odds: '1.29' }], both_teams_to_score_1st_half_2nd_half: [{ opp: 'Yes / Yes', odds: '15.00' }, { opp: 'Yes / No', odds: '5.50' }, { opp: 'No / Yes', odds: '4.00' }, { opp: 'No / No', odds: '1.62' }], '1st_half_asian_handicap': [{ opp: '-0.5', odds: '1.875', header: 'Home' }, { opp: '+0.5', odds: '1.975', header: 'Away' }], '1st_half_goal_line': [{ goals: '1.0, 1.5', odds: '1.950', header: 'Over' }, { goals: '1.0, 1.5', odds: '1.900', header: 'Under' }], alternative_1st_half_asian_handicap: [{ opp: '-1.5, -2.0', odds: '5.900', header: 'Home' }, { opp: '+1.5, +2.0', odds: '1.130', header: 'Away' }, { opp: '-1.5', odds: '4.150', header: 'Home' }, { opp: '+1.5', odds: '1.220', header: 'Away' }, { opp: '-1.0, -1.5', odds: '3.550', header: 'Home' }, { opp: '+1.0, +1.5', odds: '1.275', header: 'Away' }, { opp: '-1.0', odds: '3.000', header: 'Home' }, { opp: '+1.0', odds: '1.375', header: 'Away' }, { opp: '-0.5, -1.0', odds: '2.200', header: 'Home' }, { opp: '+0.5, +1.0', odds: '1.650', header: 'Away' }, { opp: '0.0, -0.5', odds: '1.525', header: 'Home' }, { opp: '0.0, +0.5', odds: '2.425', header: 'Away' }, { opp: '0.0', odds: '1.220', header: 'Home' }, { opp: '0.0', odds: '4.150', header: 'Away' }, { opp: '0.0, +0.5', odds: '1.160', header: 'Home' }, { opp: '0.0, -0.5', odds: '5.250', header: 'Away' }, { opp: '+0.5', odds: '1.120', header: 'Home' }, { opp: '-0.5', odds: '6.250', header: 'Away' }], alternative_1st_half_goal_line: [{ goals: '0.5, 1.0', odds: '1.350', header: 'Over' }, { goals: '0.5, 1.0', odds: '3.100', header: 'Under' }, { goals: '1.0', odds: '1.525', header: 'Over' }, { goals: '1.0', odds: '2.425', header: 'Under' }, { goals: '1.5', odds: '2.250', header: 'Over' }, { goals: '1.5', odds: '1.625', header: 'Under' }, { goals: '1.5, 2.0', odds: '2.750', header: 'Over' }, { goals: '1.5, 2.0', odds: '1.425', header: 'Under' }, { goals: '2.0', odds: '3.900', header: 'Over' }, { goals: '2.0', odds: '1.240', header: 'Under' }, { goals: '2.0, 2.5', odds: '4.500', header: 'Over' }, { goals: '2.0, 2.5', odds: '1.190', header: 'Under' }, { goals: '2.5', odds: '5.250', header: 'Over' }, { goals: '2.5', odds: '1.160', header: 'Under' }, { goals: '2.5, 3.0', odds: '7.000', header: 'Over' }, { goals: '2.5, 3.0', odds: '1.100', header: 'Under' }], '1st_half_handicap': [{ opp: 'Arsenal  -1.0', odds: '4.00' }, { opp: 'Tie - Leicester +1.0', odds: '3.00' }, { opp: 'Leicester  +1.0', odds: '1.83' }], alternative_1st_half_handicap_result: [{ opp: '-2.0', odds: '11.00', header: 'Home' }, { opp: '+2.0', odds: '5.50', header: 'Tie' }, { opp: '+2.0', odds: '1.18', header: 'Away' }, { opp: '+1.0', odds: '1.11', header: 'Home' }, { opp: '-1.0', odds: '7.00', header: 'Tie' }, { opp: '-1.0', odds: '21.00', header: 'Away' }], first_half_goals: [{ goals: '0.5', odds: '1.25', header: 'Over' }, { goals: '0.5', odds: '3.75', header: 'Under' }, { goals: '1.5', odds: '2.20', header: 'Over' }, { goals: '1.5', odds: '1.62', header: 'Under' }, { goals: '2.5', odds: '5.00', header: 'Over' }, { goals: '2.5', odds: '1.17', header: 'Under' }, { goals: '3.5', odds: '15.00', header: 'Over' }, { goals: '3.5', odds: '1.03', header: 'Under' }], exact_1st_half_goals: [{ opp: '0 Goals', odds: '3.75' }, { opp: '1 Goal', odds: '2.62' }, { opp: '2 Goals', odds: '3.60' }, { opp: '3 Goals', odds: '7.50' }, { opp: '4 Goals', odds: '21.00' }, { opp: '5+ Goals', odds: '34.00' }], '1st_half_goals_odd_even': [{ opp: 'Odd', odds: '2.00' }, { opp: 'Even', odds: '1.80' }], to_score_in_half: [{ name: '1st Half', odds: '1.50', header: 'Yes' }, { name: '1st Half', odds: '2.50', header: 'No' }, { name: '2nd Half', odds: '1.33', header: 'Yes' }, { name: '2nd Half', odds: '3.25', header: 'No' }, { name: '1st Half', odds: '2.75', header: 'Yes' }, { name: '1st Half', odds: '1.40', header: 'No' }, { name: '2nd Half', odds: '2.50', header: 'Yes' }, { name: '2nd Half', odds: '1.50', header: 'No' }], half_with_most_goals: [{ opp: '1st Half', odds: '2.88' }, { opp: '2nd Half', odds: '2.05' }, { opp: 'Tie', odds: '3.75' }], home_team_highest_scoring_half: [{ opp: 'Arsenal - 1st Half', odds: '3.00' }, { opp: 'Arsenal - 2nd Half', odds: '2.20' }, { opp: 'Arsenal - Tie', odds: '3.10' }], away_team_highest_scoring_half: [{ opp: 'Leicester - 1st Half', odds: '4.00' }, { opp: 'Leicester - 2nd Half', odds: '3.25' }, { opp: 'Leicester - Tie', odds: '1.80' }], '2nd_half_result': [{ opp: '1', odds: '1.62' }, { opp: 'X', odds: '2.88' }, { opp: '2', odds: '6.50' }], '2nd_half_goals': [{ goals: '0.5', odds: '1.17', header: 'Over' }, { goals: '0.5', odds: '5.00', header: 'Under' }, { goals: '1.5', odds: '1.80', header: 'Over' }, { goals: '1.5', odds: '1.91', header: 'Under' }, { goals: '2.5', odds: '3.75', header: 'Over' }, { goals: '2.5', odds: '1.25', header: 'Under' }, { goals: '3.5', odds: '9.00', header: 'Over' }, { goals: '3.5', odds: '1.07', header: 'Under' }, { goals: '4.5', odds: '21.00', header: 'Over' }, { goals: '4.5', odds: '1.02', header: 'Under' }], exact_2nd_half_goals: [{ opp: '0 Goals', odds: '5.00' }, { opp: '1 Goal', odds: '3.00' }, { opp: '2 Goals', odds: '3.40' }, { opp: '3 Goals', odds: '5.50' }, { opp: '4 Goals', odds: '13.00' }, { opp: '5+ Goals', odds: '21.00' }], '2nd_half_goals_odd_even': [{ opp: 'Even', odds: '1.80' }, { opp: 'Odd', odds: '1.91' }],
            },
          },
          main: {
            updated_at: '1498201947',
            sp: {
              full_time_result: [{ opp: '1', odds: '1.36' }, { opp: 'X', odds: '4.75' }, { opp: '2', odds: '8.50' }], double_chance: [{ opp: '1X', odds: '1.08' }, { opp: 'X2', odds: '3.20' }, { opp: '12', odds: '1.20' }], correct_score: [{ opp: '1-0', odds: '9.00', header: 'Home' }, { opp: '0-0', odds: '15.00', header: 'X' }, { opp: '1-0', odds: '26.00', header: 'Away' }, { opp: '2-0', odds: '7.50', header: 'Home' }, { opp: '1-1', odds: '10.00', header: 'X' }, { opp: '2-0', odds: '41.00', header: 'Away' }, { opp: '2-1', odds: '9.00', header: 'Home' }, { opp: '2-2', odds: '21.00', header: 'X' }, { opp: '2-1', odds: '26.00', header: 'Away' }, { opp: '3-0', odds: '10.00', header: 'Home' }, { opp: '3-3', odds: '51.00', header: 'X' }, { opp: '3-0', odds: '126.00', header: 'Away' }, { opp: '3-1', odds: '12.00', header: 'Home' }, { opp: '4-4', odds: '351.00', header: 'X' }, { opp: '3-1', odds: '67.00', header: 'Away' }, { opp: '3-2', odds: '26.00', header: 'Home' }, { opp: '3-2', odds: '51.00', header: 'Away' }, { opp: '4-0', odds: '17.00', header: 'Home' }, { opp: '4-0', odds: '501.00', header: 'Away' }, { opp: '4-1', odds: '21.00', header: 'Home' }, { opp: '4-1', odds: '201.00', header: 'Away' }, { opp: '4-2', odds: '41.00', header: 'Home' }, { opp: '4-2', odds: '201.00', header: 'Away' }, { opp: '4-3', odds: '101.00', header: 'Home' }, { opp: '4-3', odds: '251.00', header: 'Away' }, { opp: '5-0', odds: '34.00', header: 'Home' }, { opp: '5-1', odds: '41.00', header: 'Home' }, { opp: '5-2', odds: '67.00', header: 'Home' }, { opp: '5-3', odds: '201.00', header: 'Home' }, { opp: '6-0', odds: '67.00', header: 'Home' }, { opp: '6-1', odds: '67.00', header: 'Home' }, { opp: '6-2', odds: '151.00', header: 'Home' }, { opp: '6-3', odds: '501.00', header: 'Home' }, { opp: '7-0', odds: '151.00', header: 'Home' }, { opp: '7-1', odds: '151.00', header: 'Home' }, { opp: '7-2', odds: '401.00', header: 'Home' }, { opp: '8-0', odds: '501.00', header: 'Home' }], half_time_full_time: [{ opp: 'Arsenal - Arsenal', odds: '2.00' }, { opp: 'Arsenal - Draw', odds: '21.00' }, { opp: 'Arsenal - Leicester', odds: '51.00' }, { opp: 'Draw - Arsenal', odds: '4.00' }, { opp: 'Draw - Draw', odds: '8.00' }, { opp: 'Draw - Leicester', odds: '21.00' }, { opp: 'Leicester - Arsenal', odds: '19.00' }, { opp: 'Leicester - Draw', odds: '21.00' }, { opp: 'Leicester - Leicester', odds: '15.00' }], goals_over_under: [{ goals: '2.5', odds: '1.53', header: 'Over' }, { goals: '2.5', odds: '2.40', header: 'Under' }], both_teams_to_score: [{ opp: 'Yes', odds: '1.67' }, { opp: 'No', odds: '2.10' }], asian_handicap: [{ opp: '-1.0, -1.5', odds: '1.830', header: 'Home' }, { opp: '+1.0, +1.5', odds: '2.070', header: 'Away' }], goal_line: [{ goals: '3.0', odds: '1.920', header: 'Over' }, { goals: '3.0', odds: '1.980', header: 'Under' }], alternative_asian_handicap: [{ opp: '-3.0, -3.5', odds: '6.400', header: 'Home' }, { opp: '+3.0, +3.5', odds: '1.115', header: 'Away' }, { opp: '-3.0', odds: '6.000', header: 'Home' }, { opp: '+3.0', odds: '1.125', header: 'Away' }, { opp: '-2.5, -3.0', odds: '4.250', header: 'Home' }, { opp: '+2.5, +3.0', odds: '1.210', header: 'Away' }, { opp: '-2.5', odds: '3.450', header: 'Home' }, { opp: '+2.5', odds: '1.300', header: 'Away' }, { opp: '-2.0, -2.5', odds: '3.100', header: 'Home' }, { opp: '+2.0, +2.5', odds: '1.350', header: 'Away' }, { opp: '-2.0', odds: '2.750', header: 'Home' }, { opp: '+2.0', odds: '1.425', header: 'Away' }, { opp: '-1.5, -2.0', odds: '2.300', header: 'Home' }, { opp: '+1.5, +2.0', odds: '1.600', header: 'Away' }, { opp: '-1.5', odds: '2.025', header: 'Home' }, { opp: '+1.5', odds: '1.775', header: 'Away' }, { opp: '-1.0', odds: '1.550', header: 'Home' }, { opp: '+1.0', odds: '2.375', header: 'Away' }, { opp: '-0.5, -1.0', odds: '1.450', header: 'Home' }, { opp: '+0.5, +1.0', odds: '2.675', header: 'Away' }, { opp: '-0.5', odds: '1.375', header: 'Home' }, { opp: '+0.5', odds: '3.000', header: 'Away' }, { opp: '0.0, -0.5', odds: '1.240', header: 'Home' }, { opp: '0.0, +0.5', odds: '3.900', header: 'Away' }, { opp: '0.0', odds: '1.120', header: 'Home' }, { opp: '0.0', odds: '6.250', header: 'Away' }, { opp: '0.0, +0.5', odds: '1.105', header: 'Home' }, { opp: '0.0, -0.5', odds: '6.800', header: 'Away' }], alternative_goal_line: [{ goals: '1.0, 1.5', odds: '1.105', header: 'Over' }, { goals: '1.0, 1.5', odds: '6.800', header: 'Under' }, { goals: '1.5', odds: '1.180', header: 'Over' }, { goals: '1.5', odds: '4.650', header: 'Under' }, { goals: '1.5, 2.0', odds: '1.210', header: 'Over' }, { goals: '1.5, 2.0', odds: '4.250', header: 'Under' }, { goals: '2.0', odds: '1.250', header: 'Over' }, { goals: '2.0', odds: '3.800', header: 'Under' }, { goals: '2.0, 2.5', odds: '1.425', header: 'Over' }, { goals: '2.0, 2.5', odds: '2.750', header: 'Under' }, { goals: '2.5', odds: '1.575', header: 'Over' }, { goals: '2.5', odds: '2.350', header: 'Under' }, { goals: '2.5, 3.0', odds: '1.725', header: 'Over' }, { goals: '2.5, 3.0', odds: '2.075', header: 'Under' }, { goals: '3.0, 3.5', odds: '2.200', header: 'Over' }, { goals: '3.0, 3.5', odds: '1.650', header: 'Under' }, { goals: '3.5', odds: '2.375', header: 'Over' }, { goals: '3.5', odds: '1.550', header: 'Under' }, { goals: '3.5, 4.0', odds: '2.850', header: 'Over' }, { goals: '3.5, 4.0', odds: '1.400', header: 'Under' }, { goals: '4.0', odds: '3.550', header: 'Over' }, { goals: '4.0', odds: '1.275', header: 'Under' }, { goals: '4.0, 4.5', odds: '3.900', header: 'Over' }, { goals: '4.0, 4.5', odds: '1.240', header: 'Under' }, { goals: '4.5', odds: '4.250', header: 'Over' }, { goals: '4.5', odds: '1.210', header: 'Under' }, { goals: '4.5, 5.0', odds: '5.500', header: 'Over' }, { goals: '4.5, 5.0', odds: '1.150', header: 'Under' }], draw_no_bet: [{ opp: 'Arsenal', odds: '1.11' }, { opp: 'Leicester', odds: '6.50' }], result_both_teams_to_score: [{ name: 'Arsenal', odds: '2.88', header: 'Yes' }, { name: 'Arsenal', odds: '2.38', header: 'No' }, { name: 'Leicester', odds: '13.00', header: 'Yes' }, { name: 'Leicester', odds: '15.00', header: 'No' }, { name: 'Draw', odds: '6.00', header: 'Yes' }, { name: 'Draw', odds: '15.00', header: 'No' }], handicap_result: [{ opp: 'Arsenal (-1)', odds: '1.95' }, { opp: 'Tie - (Leicester +1)', odds: '3.75' }, { opp: 'Leicester (+1)', odds: '3.20' }], alternative_handicap_result: [{ opp: '-3.0', odds: '6.50', header: 'Home' }, { opp: '+3.0', odds: '5.50', header: 'Tie' }, { opp: '+3.0', odds: '1.29', header: 'Away' }, { opp: '-2.0', odds: '3.40', header: 'Home' }, { opp: '+2.0', odds: '4.00', header: 'Tie' }, { opp: '+2.0', odds: '1.73', header: 'Away' }, { opp: '+1.0', odds: '1.08', header: 'Home' }, { opp: '-1.0', odds: '9.00', header: 'Tie' }, { opp: '-1.0', odds: '15.00', header: 'Away' }, { opp: '+2.0', odds: '1.02', header: 'Home' }, { opp: '-2.0', odds: '19.00', header: 'Tie' }, { opp: '-2.0', odds: '21.00', header: 'Away' }], winning_margin: [{ goals: ' 1', odds: '3.75', header: 'Home' }, { goals: ' 1', odds: '9.00', header: 'Away' }, { goals: ' 2', odds: '4.00', header: 'Home' }, { goals: ' 2', odds: '19.00', header: 'Away' }, { goals: ' 3', odds: '5.50', header: 'Home' }, { goals: ' 3', odds: '81.00', header: 'Away' }, { goals: ' 4+', odds: '6.50', header: 'Home' }, { goals: ' 4+', odds: '251.00', header: 'Away' }, { goals: 'Score Draw', odds: '6.00', header: 'Home' }, { goals: 'No Goal', odds: '15.00', header: 'Home' }],
            },
          },
        }],
      };
    }
}
