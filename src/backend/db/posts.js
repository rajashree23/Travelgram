import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Beautiful mountains in Manali!",
    mediaUrl:
      "https://res.cloudinary.com/di7drmeev/image/upload/v1687971565/travelgram/posts/manali.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rajashree",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "I booked the Xline Zipline that passes through the Marina in Dubai with @headoutuae @x_line. Did you know it’s the World’s Longest Urban Zipline that actually passes through the city over restaurants, boats and people ?? Super cool right !!!",
    mediaUrl: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "relentless23",
    createdAt: "2023-06-20T22:29:34+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Chiiling by the sea on a sunny Sunday!",
    mediaUrl:
      "https://res.cloudinary.com/di7drmeev/image/upload/v1687972462/travelgram/posts/sea-beach.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "monalisha",
    createdAt: "2023-06-23T12:29:34+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Had an awesome fun doing zipline yesterday!!!",
    mediaUrl:
      "https://res.cloudinary.com/di7drmeev/image/upload/v1687972525/travelgram/posts/zip-line.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tapaja",
    createdAt: "2023-06-24T15:00:34+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Planning to visit Vietnam next month, any suggestions of places guys?",
    mediaUrl: "",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "agni",
    createdAt: "2023-06-25T20:29:34+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Long trekking paid off beautifully!",
    mediaUrl: "https://res.cloudinary.com/di7drmeev/image/upload/v1687972639/travelgram/posts/sunrise.jpg",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rajashree",
    createdAt: "2023-05-25T22:29:34+05:30",
    updatedAt: formatDate(),
  },
];
