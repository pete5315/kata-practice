"use strict";
// https://www.codewars.com/kata/56af1a20509ce5b9b000001e
Object.defineProperty(exports, "__esModule", { value: true });
exports.travel = void 0;
// DESCRIPTION:
// A traveling salesman has to visit clients. He got each client's address e.g. "432 Main Long Road St. Louisville OH 43071" as a list.
// The basic zipcode format usually consists of two capital letters followed by a white space and five digits. The list of clients to visit was given as a string of all addresses, each separated from the others by a comma, e.g. :
// "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432".
// To ease his travel he wants to group the list by zipcode.
// Task
// The function travel will take two parameters r (addresses' list of all clients' as a string) and zipcode and returns a string in the following format:
// zipcode:street and town,street and town,.../house number,house number,...
// The street numbers must be in the same order as the streets where they belong.
// If a given zipcode doesn't exist in the list of clients' addresses return "zipcode:/"
// Examples
// r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"
// travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"
// travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"
// travel(r, "NY 5643") --> "NY 5643:/"
var travel = function (r, zipcode) {
    console.log(zipcode, 'zip', r);
    if (!(!(zipcode === "") && r.search(zipcode) !== -1)) {
        return ':/';
    }
    var outputString = zipcode;
    var stringArray = r.split(',');
    //   console.log(stringArray)
    function checkZip(arrayString) {
        return arrayString.search(zipcode) >= 0;
    }
    ;
    var confirmedAddresses = stringArray.filter(checkZip);
    outputString = confirmedAddresses[0].slice(confirmedAddresses[0].length - 8) + ":";
    console.log("outputString check", outputString);
    var stateZip = outputString;
    for (var _i = 0, confirmedAddresses_1 = confirmedAddresses; _i < confirmedAddresses_1.length; _i++) {
        var address = confirmedAddresses_1[_i];
        // console.log(address.slice(0,address.search(" ")), 47447)
        outputString = outputString + (address.slice(address.search(" ") + 1, address.search(stateZip) - 8)) + ",";
    }
    outputString = outputString.slice(0, outputString.length - 1) + "/";
    for (var _a = 0, confirmedAddresses_2 = confirmedAddresses; _a < confirmedAddresses_2.length; _a++) {
        var address = confirmedAddresses_2[_a];
        // console.log(address.slice(0,address.search(" ")), 47447)
        outputString = outputString + (address.slice(0, address.search(" "))) + ",";
    }
    outputString = outputString.slice(0, outputString.length - 1);
    console.log(confirmedAddresses, outputString);
    return outputString;
};
exports.travel = travel;
console.log((0, exports.travel)('123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432,54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000,10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000,22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654,45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000,100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000,2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654,45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200,100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001,2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655,2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655,2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000', '45522'));
