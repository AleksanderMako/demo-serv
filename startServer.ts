import { createConnection } from 'typeorm';
import Server from './server';
import Match from './src/entities/match/match';
import MatchOdds from './src/entities/odds/odds';
import Bet from './src/entities/ticket/bet';
import Ticket from './src/entities/ticket/ticket';
import User from './src/entities/user/user';
// const EventEmitter = require("events");
const start = async function () {
  const connection = await createConnection({
    type: 'mysql',
    host: 'database',
    port: 3306,
    username: 'user1',
    password: 'user1pass',
    database: 'testdb',
    entities: [
      User,
      Ticket,
      MatchOdds,
      Match,
      Bet,
    ],
    synchronize: true,
  });
  const server = new Server(connection);
  const seedService = server.getSeedService();
  await seedService.seedMatches();

  server.startListening();
  // const emitter = new EventEmitter();
  // emitter.setMaxListeners(30);
};

start();
