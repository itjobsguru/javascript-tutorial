const users = [
  {
    "id": 101,
    "name": "John",
    "email": "John@gmail.com",
    "website": "hildegard.org",
  },
  {
    "id": 102,
    "name": "Mike",
    "email": "mike@gmail.com",
    "website": "anastasia.net",
  },
  {
    "id": 103,
    "name": "Cedric",
    "email": "ced@yahoo.com",
    "website": "ramiro.info",
  },
  {
    "id": 104,
    "name": "Robert",
    "email": "robert@gmail.com",
    "website": "kale.biz",
  },
  {
    "id": 105,
    "name": "Lisa",
    "email": "lisa@gmail.com",
    "website": "demarco.info",
  }
];

const getUSers = () => {
    /* Instead of using mock user data, 
       it is fetched from users API in real 
       world scenarios
    */
  return users;
};

export default getUSers;
