import { IContact } from "./typings/IContact";

export const allContactsDummy: IContact[] = [
  {
    id: 1,
    name: "Bob",
    email: "bob@bob.com",
    address: "123 Street",
    jobTitle: "Bobbing around",
    phoneNumbers: ["123 123 123", "555 555 555"],
    picture: "https://i.imgur.com/epudNB9.png",
  },
  {
    id: 2,
    name: "Jim",
    email: "jim@jim.com",
    address: "567 Street",
    jobTitle: "Jimming around",
    phoneNumbers: ["745 435 7854", "742 785 2134"],
    picture: "https://i.imgur.com/e0y27d3.png",
  },
  {
    id: 3,
    name: "Patrick",
    email: "Patrick@star.com",
    address: "632 Street",
    jobTitle: "Do nothing",
    phoneNumbers: ["633 435 7854", "742 23 2134"],
    picture: "https://i.imgur.com/e0y27d3.png",
  },
  {
    id: 4,
    name: "Other Jim",
    email: "otherjim@jim.com",
    address: "854 Street",
    jobTitle: "Be the other Jim here",
    phoneNumbers: ["745 435 5321", "462 785 5673"],
    picture: "https://i.imgur.com/e0y27d3.png",
  },
  {
    id: 5,
    name: "Cactus plant",
    email: "cactus@plant.com",
    address: "The window sill",
    jobTitle: "Be a cactus",
    phoneNumbers: ["745 435 7854", "742 785 2134"],
    picture: "https://i.imgur.com/e0y27d3.png",
  },
];

export function updateDummyData(payload: IContact) {
  allContactsDummy[
    allContactsDummy.findIndex((contact) => contact.id === payload.id)
  ] = payload;
}
