function Account(login, email) {
    this.login = login;
    this.email = email;
    
}
Account.prototype.getInfo = function () {
    console.log(`${login}, ${email}`);
}
const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});
console.log(mango);
 const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});
console.log(poly);
