// Generated by CoffeeScript 1.7.1

/*
自定义标签
 */
Mifan.directive("more", function() {
  return {
    templateUrl: "views/template/more.html",
    replace: true,
    restrict: "AE"
  };
});

Mifan.directive("snslogin", function() {
  return {
    templateUrl: "views/template/sns-login.html",
    replace: true,
    restrict: "AE"
  };
});

Mifan.directive("usermenu", function() {
  return {
    priority: 0,
    templateUrl: "views/template/usermenu.html",
    replace: true,
    restrict: "E",
    scope: false
  };
});

Mifan.directive("sending-btn", function() {
  return {
    priority: 0,
    templateUrl: "views/template/sending-btn.html",
    transclude: true,
    restrict: "E",
    scope: false
  };
});

Mifan.directive("logintip", function() {
  return {
    templateUrl: "views/template/logintip.html",
    replace: true,
    restrict: "AE",
    scope: false
  };
});

Mifan.directive("errormsg", function() {
  return {
    templateUrl: "views/template/error-msg.html",
    replace: true,
    restrict: "AE",
    scope: false
  };
});

Mifan.directive("uiloading", function() {
  return {
    templateUrl: "views/template/ui-loading.html",
    replace: true,
    restrict: "AE",
    scope: false
  };
});

Mifan.directive("btnloading", function() {
  return {
    template: "<em class=\"glyphicon glyphicon-refresh animated infinite\"></em>",
    replace: true,
    restrict: "AE",
    scope: false
  };
});
