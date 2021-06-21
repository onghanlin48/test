/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function showMessage() {
    alert('Hi! welcome to our website!');
}


function validateEmail() {
    var emailID = document.getElementById("email").value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID\nXXXXX@XXX.XX")
        document.myForm.email.focus();
        return false;
    }
    return (true);
}
function UpperName() {
    var x = document.getElementById("name").value;
    document.getElementById("name").value = x.toUpperCase();
}
function submit() {
    var emailID = document.getElementById("email").value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID\nXXXXX@XXX.XX")
        document.myForm.email.focus();
    }
    else {
        var name = document.getElementById("name").value;
        alert("Thank you ! " + name + "!");
    }
}

function changecolor(x,y,z) {
    document.getElementById(x).style.background = y;
    document.getElementById(x).style.color = z;
}

function buy() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var telefon = document.getElementById("telefon").value;
    var bank = document.getElementById("bank").value;
    var bukti = document.getElementById("bukti").value;
    var check = document.getElementById("check");

    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");

    if (check.checked == true) {
        if (atpos < 1 || (dotpos - atpos < 2)) {
            alert("Please enter correct email ID\nXXXXX@XXX.XX")
            document.myForm.email.focus();
        }
        else {
            var name = document.getElementById("name").value;
            alert("Thank you for you oder!\n Your name : " + name + "\nYour email:  " + email + "\nYour Telefon number : " + telefon + "\n Bank: " + bank + "\nBukti Payment " + bukti);
        }
    }
    else {
        document.getElementById("checktext").style.color = "red";
        alert("Please check the box at the text red!");
    }

}

function linkemail(){
    window.location.href = "mailto:onghanlin48@gmail.com";

}