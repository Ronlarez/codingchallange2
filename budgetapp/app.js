// budget controller module
var budgetController = (function() {
//some code

})();

// UI controller module
var UIController = (function() {

var DOMstrings = {
  inputType: ".add__type",
  inputDiscription: ".add__discription",
  inputValue: ".add__value",
  inputBtn: ".add__btn"
};
return{
  getInput: function(){
      return {
        type: document.querySelector(DOMstrings.inputType).value,// will be eather inc or exp
        discription: document.querySelector(DOMstrings.inputDiscription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
  },

  getDOMstrings: function() {
    return DOMstrings;
  }
};

})();

// global app controller module
var controller = (function(budgetCtrl, UICtrl) {

   var DOM = UICtrl.getDOMstrings();

var ctrlAddItem = function() {
  //1. get field input data
  var input = UICtrl.getInput();

  //2. add the item to the budget controller

  //3. add the item tothe ui

  //4. calculate the budget

  //5. display the budget on ui
}
document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

document.addEventListener("keypress", function(event) {

  if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
  }

});

})(budgetController, UIController);
