(function(){
  'use strict';

  var app = angular.module('app');


  var TodoController = function($scope){

    $scope.newTodo = '';

    $scope.amount = 209.80 ;

    $scope.list = [{
      title: 'First TODO item',
      completed: false
    },{
      title: 'Second TODO item',
      completed: false
    },{
      title: 'Third TODO Item',
      completed: false
    }];

    $scope.addTodo = function(){
      $scope.list.unshift({
        title: $scope.newTodo,
        completed: false
      });

      /*
        Clear the input text after you add it to the list
       */

      $scope.clearNewTodoAfterSubmit();
    };

    $scope.removeTodo = function(index){
      $scope.list.splice(index, 1);
    };

    $scope.updateTodo = function(item, index){
      $scope.list[index].title = item.title;
    };

    $scope.clearNewTodoAfterSubmit = function(){
      $scope.newTodo = '';
    };

    $scope.getRemaining = function(){
      return $scope.list.filter(function(item){
        return !item.completed;
      });
    };

  };

  /*
    Inject dependencies
    Multiple ways of injecting dependencies
      another) Inject $scope in the initialization part
      e.g app.controller('MainController',['$scope', MainController])
   */
  TodoController.$inject = ['$scope'];

  app.controller('TodoController', TodoController)
})();
