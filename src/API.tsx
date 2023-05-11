const TweetsAPI = {
  url: "/tweets",
  schema: {
    data: [
      {
        user: {
          name: "",
          handle: "",
          profilePic: "image.png",
        },
        tweetBody: "",
        date: "",
        activity: {
          replies: 0,
          retweets: 0,
          likes: 0,
        },
      },
    ],
  },
};
