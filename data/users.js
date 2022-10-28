import bcrypt from "bcryptjs";

const users = [
  {
    name: "",
    email: "",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "",
    email: "",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
