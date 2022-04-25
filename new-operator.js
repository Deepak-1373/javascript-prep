// object creation without "new" operator
const functionStore = {
  increase() {
    this.score++;
  },
};

function user(name, score) {
  const obj = Object.create(functionStore);
  obj.name = name;
  obj.score = score;
  return obj;
}

const user1 = user("John", 10);
const user2 = user("Scarlet", 12);

// object creation with "new" operator
function User(name, score) {
  this.name = name;
  this.score = score;
}

// shared function will go in prototype
User.prototype.increase = function () {
  this.score++;
};

const user3 = new User("John", 10);
const user4 = new User("Marvel", 12);

user3.increase();
user3.increase();
console.log(user3.score);
