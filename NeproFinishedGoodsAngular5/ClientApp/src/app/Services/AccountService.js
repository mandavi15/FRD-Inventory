"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var UserAccount = /** @class */ (function () {
    function UserAccount(_http, baseUrl) {
        this._http = _http;
        this.myAppUrl = "";
        this.myAppUrl = baseUrl;
    }
    UserAccount.prototype.saveUser = function (employee) {
        return this._http.post(this.myAppUrl + 'api/Employee/Create', employee)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    UserAccount.prototype.errorHandler = function (errorHandler) {
        throw new Error("Method not implemented.");
    };
    return UserAccount;
}());
exports.UserAccount = UserAccount;
//# sourceMappingURL=AccountService.js.map