var ViewModel = function () {
    var self = this;
    self.products = ko.observableArray();
    self.customers = ko.observableArray();
    self.housekeepings = ko.observableArray();
    self.payments = ko.observableArray();
    self.rooms = ko.observableArray();
    self.staffs = ko.observableArray();
    self.error = ko.observable();

    //************  Remember to change the URI accordingly  **********************//
    var bookingsURI = 'http://localhost:49981/api/bookings/';
    var customersURI = 'http://localhost:49981/api/customers/';
    var housekeepingsURI = 'http://localhost:49981/api/housekeepings/';
    var paymentsURI = 'http://localhost:49981/api/payments/';
    var roomsURI = 'http://localhost:49981/api/rooms/';
    var staffsURI = 'http://localhost:49981/api/staffs/';

    //** this section contains all the AJAX call to the Web APIs **//
    //** this is the end of the section contains all the AJAX call to the Web APIs **//

    // Fetch the initial data
};

ko.applyBindings(new ViewModel());
