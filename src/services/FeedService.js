import * as agent from 'superagent';

const BaseUrl = 'http://localhost:3000/api/';

const Endpoints = {
  EVENTS: 'Events'
}

export default class FeedService {
  static GetSuggestionFeed() {
    return new Promise((resolve, reject) => {
      agent
        .get(`${BaseUrl}${Endpoints.EVENTS}`)
        .end((err, res) => {
          if (err) { reject(err) };
          resolve(res.body);
        });
    })
  }
}