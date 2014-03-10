// This file was automatically generated from signup.soy.
// Please don't edit this file by hand.

goog.provide('com.gthrng.SignupSoy');

goog.require('soy');
goog.require('soy.StringBuilder');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {soy.StringBuilder=} opt_sb
 * @return {string|undefined}
 * @notypecheck
 */
com.gthrng.SignupSoy.getHTML = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="header"><div id="navbar"><div class="button" id="backbutton"><div><p>Log in</p></div></div></div><p id="pagetitle">Create your Gathering account</p></div> <!-- Header ends --><form id="accountform" class="maincontent"><p class="wp7">Gathering Invitation Code</p><input class="textfield" id="invitation_code" name="invitation_code" type="text" placeholder="Gathering Invitation Code"><p class="infotext">Enter the code that was included in your invitation (if you received one).</p><p class="wp7">Full name</p><input class="textfield" id="name" name="name" type="text" placeholder="Full name"><p class="infotext">Fellow event guests will identify you by this name.</p><p class="wp7">email@address.com</p><input class="textfield" id="email" name="email" type="email" placeholder="email@address.com"><p class="wp7">Password</p><input class="textfield" id="password" name="password" type="password" placeholder="Password"><br/><p class="wp7">Password (again)</p><input class="textfield" id="password" name="retypepassword" type="password" placeholder="Password (again)"><br/><input class="checkbox" id="tos" name="tos" type="checkbox"><label for="tos">I have read and agree to the <a href="tos.html">Gathering Terms of Service</a>.</label><hr class="clear" /><div id="donebuttonwrapper"><div class="button bigbutton" id="donebutton"></div><p class="buttonlabel">Submit</p></div></form><hr class="clear" />');
  if (!opt_sb) return output.toString();
};
