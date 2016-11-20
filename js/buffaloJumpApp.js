angular.module('buffaloJumpApp',[])
	.controller('buffaloJumpController',["$scope",function($scope){

		var scenes = {
			entrance : {
				skySmallImage: "images/entrance_small.jpg"
				,skyRotation: "0 130 0"
				,navPoints: [
					{
						position: "4 2 3"
						,animationFrom: "0 -45 0"
						,animationTo: "0 315 0"
						,mouseEnterRotation: "0 -45 0"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,destination: "pavilion"
						,id: "nav1"
					}
				]
				,descriptors: [
					{
						position: "3.2 2 1" // "x y z"
						,soundSrc: "sounds/test.wav"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,id: "man"
					},
					{
						position: "3.2 2 -2" // "x y z"
						,soundSrc: "sounds/test.wav"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,id: "car"
					},
					{
						position: "-0 3.5 11" // "x y z"
						,soundSrc: "sounds/test.wav"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,id: "sun"
					}
				]
			}
			,pavilion: {
				skySmallImage: "images/pavilion_small.jpg"
				,skyRotation: "0 220 0"
				,navPoints: [
					,{
						position: "-4 1.6 4"
						,animationFrom: "0 90 0"
						,animationTo: "0 -270 0"
						,mouseEnterRotation: "0 -45 0"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,destination: "entrance"
						,id:"nav2"
					}
				]
				,descriptors: [
					{
						position: "3.2 2 0" // "x y z"
						,soundSrc: "sounds/test.wav"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,id: "testSound"
					}
				]
			}
			,face: {
				skySmallImage: "images/face_small.jpg"
				,skyRotation: "0 220 0"
				,navPoints: [
					{
						position: "-3 1 8"
						,animationFrom: "0 -45 0"
						,animationTo: "0 315 0"
						,mouseEnterRotation: "0 -45 0"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,destination: "pavilion"
						,id:"nav1"
					}
				]
			}
			,overlook: {
				skySmallImage: "images/overlook_small.jpg"
				,skyRotation: "0 -235 0"
				,navPoints: [
					{
						position: "3.2 1.3 2"
						,animationFrom: "0 -55 0"
						,animationTo: "0 305 0"
						,mouseEnterRotation: "0 -45 0"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,destination: "pavilion"
						,id:"nav1"
					}
				]
			}
		}

		function setupScene(){
			sky.setAttribute("rotation",$scope.scene.skyRotation);
			sky.setAttribute("src",$scope.scene.skySmallImage);
		}


		var sky = document.querySelector("#sky");
		var vrScene = document.querySelector("#scene");
		$scope.followBtnImgUrl = 'images/sound.png'


		vrScene.addEventListener("loaded",function(){
			console.log("loaded!!");
			setupScene();
		});



		//initialize scene
		 $scope.scene = scenes.entrance;


		$scope.navMouseEnter = function(){

			console.log(this);
		}
		$scope.navClick = function(navPoint){
			$scope.scene = scenes[navPoint.destination];
			setupScene();
		}
		$scope.descMouseEnter = function() {
			console.log(this);
		}
		$scope.descClick = function(descriptor){
			// Play audio here.
			console.log(descriptor.audio)
			if (descriptor.audio === undefined || descriptor.audio === null) {
				descriptor.audio = new Audio(descriptor.soundSrc);
				descriptor.audio.play();
			} else {
				descriptor.audio.pause();
				descriptor.audio = null;
			}
			if ($scope.followBtnImgUrl === 'images/sound.png') {
					$scope.followBtnImgUrl =  'images/navigate.svg';
			} else {
					$scope.followBtnImgUrl = 'images/sound.png';
			}
		}

	}]);
