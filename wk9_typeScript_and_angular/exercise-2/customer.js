var Customer = /** @class */ (function () {
    function Customer() {
        this.firstName = "";
        this.lastName = "";
    }
    Customer.prototype.greeter = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    return Customer;
}());
var customer = new Customer();
customer.firstName = "Jane";
customer.lastName = "User";
customer.greeter();
