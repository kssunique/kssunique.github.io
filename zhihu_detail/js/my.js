
angular.module('myModule',['ng','ngRoute']).
controller('mainCtrl',function($scope,$http){
  $scope.isLoading=true;  //当前是否正在加载
  $scope.hasMore=true;    //还有更多数据可以加载吗

  $http.get('data/question_list.php?start=0').success(function(data){
    $scope.questionList=data;
    $scope.isLoading=false;
    console.log(data)
  });
  $scope.getMore=function() {
    $http.get('data/question_list.php?start='+$scope.questionList.length).success(function (data) {
      $scope.isLoading=false;
      if(data.length<5){
        $scope.hasMore=false; //已经没有更多数据可供加载了
      }
      $scope.questionList=$scope.questionList.concat(data);
    });
  };
});