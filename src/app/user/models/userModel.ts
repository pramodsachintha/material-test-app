export class User {
  username: string;
  email: string;
  password: string;
  age: number;
  date: Date;

  constructor(username, email, password, age, date) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.age = age;
    this.date = date;
  }
}
