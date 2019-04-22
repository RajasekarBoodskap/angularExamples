(function () {
    angular.module('app')
        .controller('layoutCtrl', ['washService','$scope','$http', layoutCtrl]);
    
    function layoutCtrl(washService,$scope,$http) {
        
        $scope.initail = function() {

            $(document).ajaxError(function myErrorHandler(event, xhr, ajaxOptions, thrownError) {

                if (xhr.status === 417 && xhr.responseJSON.code === 'INVALID_AUTH_TOKEN') {
                    Cookies.remove('session_obj');
                    document.location = '/login';
                }
            
            });
            
            $scope.renderUserDetails();
            $scope.loadUserProfilePicture();

    
        };
       
        // $(document).ready(function () {
        //     renderUserDetails()
        //     loadUserProfilePicture()
        // });
        
        $scope.renderUserDetails = function() {
            $(".user_profile_name").html(USER_OBJ.firstName +' '+(USER_OBJ.lastName ? USER_OBJ.lastName : ''))
        }
        
        
        $scope.removeCookies = function() {
            Cookies.remove('session_obj');
            Cookies.remove('domain_logo');
            Cookies.remove('user_picture');
        }
        
        $scope.logout = function() {
            
            washService.loginOutCall()
                .then(function(response) {
                    $scope.removeCookies();
                    document.location='/login';

                })
                .catch(function (response) {
                    console.log(response);
                })
        
            }
        
        
        $scope.loadUserProfilePicture = function() {
        
            if (!Cookies.get('user_picture')) {
        
                getUserProperty(PROFILE_PICTURE_PROPERTY, function (status, data) {
                    if (status) {
                        var src = JSON.parse(data.value);
                        Cookies.set('user_picture', src.picture);
                        $(".user_profile_picture").attr('src', API_BASE_PATH + '/files/download/' + API_TOKEN + '/' + src.picture);
                    } else {
                        $(".user_profile_picture").attr('src', "/images/avatar.png");
                    }
        
                })
            } else {
                $(".user_profile_picture").attr('src', API_BASE_PATH + '/files/download/' + API_TOKEN + '/' + Cookies.get('user_picture'));
            }
        }
        
        
        $scope.openNav = function() {

            if($("#sideNavBar").hasClass('barwidth')){
                $(".barmenu").html('<i class="fa fa-bars"></i>')
                $("#sideNavBar").removeClass('barwidth')
                $("#sideNavBar").hide();
            }else{
                $(".barmenu").html('<i class="fa fa-times"></i>')
                $("#sideNavBar").addClass('barwidth')
                $("#sideNavBar").show()
            }
        }

        var init = function() {

            $scope.initail();
           
    
        };
        init();
        
    }
    
}());
