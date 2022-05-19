angular.module('partials', [])
.directive('ngInput', function(){
    return {
        restrict: 'A',
        link: function($scope, elem, attrs){

            var funcNgInput = `$scope.$parent.${attrs.ngInput}`

            $scope.callFunction = function($event){
                return eval(funcNgInput)
            }

            elem.bind('input', $scope.callFunction);

        }
    }
})
.directive('stringToNumber', function(){
    return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
            ngModel.$formatters.push(function(value) {
                return parseFloat(value)
            })
        }
    }
})
            

Array.prototype.toJson = function(){
    var str = JSON.stringify(this, undefined, 4);
    return syntaxHighlight(str)

    function syntaxHighlight(json) {
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var cls = 'number',
            color=''
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                    color = (match.indexOf('rgb') >=0) ? String(match).replace('"','') : ''
                    match = (match.indexOf('rgb') >=0) ? '<strong>'+match+'</strong>' : match
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return `<span style="color: ${color}" class="${cls}">${match}</span>`
        });
    }
}

Array.prototype.gradient = function(){
    var color = 'linear-gradient(90deg, '
    var lg = (this.length - 1)
    this.forEach((item, k) => {
        color += `${item.color} `
        if(lg != k){
            color += `${item.stop}%, `
        }else{
            color += `${item.stop}%)`
        }
    })
    return color
}

           
