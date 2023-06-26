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
  },
];
