# Landr Assignment

Info on the task itself is on the document that was sent via email

## Endpoints

These following snippets are hypothetical and do not represent what the final endpoint would actually return nor does it represent the exact syntax used to call the endpoints

### [GET] /contacts

Returns every contact in the database

```
// Example result
[
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
  }
];

```

### [GET] /contacts/:id

Returns a contact with a specific id

```
// Example result
  {
    id: 1,
    name: "Bob",
    email: "bob@bob.com",
    address: "123 Street",
    jobTitle: "Bobbing around",
    phoneNumbers: ["123 123 123", "555 555 555"],
    picture: "https://i.imgur.com/epudNB9.png",
  }
```

### [POST] /contacts

Creates a new contact, returns it upon creation with a generated id

```
// Example call
const result = await axios.post(`/contacts`, {
  name: "Bob",
  email: "bob@bob.com",
  address: "123 Street",
  jobTitle: "Bobbing around",
  phoneNumbers: ["123 123 123", "555 555 555"],
  picture: "https://i.imgur.com/epudNB9.png",
});

// Example result
[
  {
    id: 1
    name: "Bob",
    email: "bob@bob.com",
    address: "123 Street",
    jobTitle: "Bobbing around",
    phoneNumbers: ["123 123 123", "555 555 555"],
    picture: "https://i.imgur.com/epudNB9.png",
  }
];

```

### [PUT] /contacts/:id

Modifies a contact based on the provided id and returns the new changes

```
// Example call
const result = await axios.put(`/contacts/${id}`, {
  name: "Bobby",
  email: "bobby@bob.com",
  address: "123 New Street",
  jobTitle: "No longer bobbing around",
  phoneNumbers: ["123 123 123"],
  picture: "https://i.imgur.com/epudNB9.png",
});

// Example result
  {
    id: 1,
    name: "Bobby",
    email: "bobby@bob.com",
    address: "123 New Street",
    jobTitle: "No longer bobbing around",
    phoneNumbers: ["123 123 123"],
    picture: "https://i.imgur.com/epudNB9.png",
  }
```

### [DELETE] /contacts/:id

Deletes a contact based on the provided id, nothing is returned other than status code

```
// Example call
const result = await axios.delete(`/contacts/${id}`);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
