export default class FeedService {
  static GetSuggestionFeed() {
    return [
      {
        title: `How To Garden`,
        description: `A beginners walkthrough of gardening techniques.`,
        user: {
          name: `Joe Smith`
        },
        date: new Date(`06/01/2018`),
        tags: ['gardening', 'outdoors', 'diy', 'home improvement'],
        comments: [
          {
            text: `This seems like a really cool idea`,
            user: {
              name: `Jimmy Jobob`
            },
            date: new Date(`06/01/2018 4:00AM`)
          },
          {
            text: `Yea, this does seem cool!`,
            user: {
              name: `Danielle Helmer`
            },
            date: new Date(`06/01/2018 9:00AM`)
          }
        ],
        up_votes: 6,
        down_votes: 0,
        host: null,
        host_volunteers: [
          {
            user: {
              name: `Danielle Helmer`
            },
            date: new Date(`06/01/2018 9:00AM`)
          }
        ],
        volunteers: [
          {
            user: {
              name: `Jimmy Jobob`
            },
            date: new Date(`06/01/2018 4:00AM`)
          }
        ],
        location: null,
        location_suggestions: [
          {
            text: `1600 Prospect St Racine, WI 53404`,
            coords: {
              lat: null,
              lng: null
            }
          }
        ]
      },
      {
        title: `Pet Training`,
        description: `Some great tips and tricks to teching your pets.`,
        user: {
          name: `Jerry Hanley`
        },
        date: new Date(`06/05/2018`),
        tags: ['pets', 'family', 'self improvement'],
        comments: [
          {
            text: `I would do this`,
            user: {
              name: `James Dean`
            },
            date: new Date(`06/01/2018 4:00AM`)
          },
          {
            text: `I'd like to do this!`,
            user: {
              name: `Danielle Helmer`
            },
            date: new Date(`06/01/2018 9:00AM`)
          }
        ],
        up_votes: 6,
        down_votes: 0,
        host: null,
        host_volunteers: [
          {
            user: {
              name: `James Dean`
            },
            date: new Date(`06/01/2018 4:00AM`)
          }
        ],
        volunteers: [
          {
            user: {
              name: `Danielle Helmer`
            },
            date: new Date(`06/01/2018 9:00AM`)
          }
        ],
        location: null,
        location_suggestions: [
          {
            text: `1600 Prospect St Racine, WI 53404`,
            coords: {
              lat: null,
              lng: null
            }
          }
        ]
      }
    ]
  }
}