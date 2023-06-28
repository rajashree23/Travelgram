import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Rajashree",
    lastName: "Parhi",
    username: "rajashree",
    password: "1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
    bookmarks: [],
    profileAvatar:
      "https://res.cloudinary.com/di7drmeev/image/upload/v1687956260/travelgram/profile-pictures/rajashree.jpg",
  },
  {
    _id: uuid(),
    firstName: "Agni",
    lastName: "Panda",
    username: "agni",
    password: "1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
    bookmarks: [],
    profileAvatar:
      "https://res.cloudinary.com/di7drmeev/image/upload/v1687962057/travelgram/profile-pictures/agni.jpg",
  },
  {
    _id: uuid(),
    firstName: "Arka",
    lastName: "Sengupta",
    username: "relentless23",
    password: "1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
    bookmarks: [],
    profileAvatar:
      "https://res.cloudinary.com/di7drmeev/image/upload/v1687962761/travelgram/profile-pictures/arka.jpg",
  },
  {
    _id: uuid(),
    firstName: "Tapaja",
    lastName: "Banerjee",
    username: "tapaja",
    password: "1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
    bookmarks: [],
    profileAvatar:
      "https://res.cloudinary.com/di7drmeev/image/upload/v1687962205/travelgram/profile-pictures/tapaja.jpg",
  },
  {
    _id: uuid(),
    firstName: "Monalisha",
    lastName: "Mishra",
    username: "monalisha",
    password: "1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
    bookmarks: [],
    profileAvatar:
      "https://res.cloudinary.com/di7drmeev/image/upload/v1687962171/travelgram/profile-pictures/monalisha.jpg",
  },
];
