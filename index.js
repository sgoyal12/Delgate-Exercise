// Create a stack of divs. Initially an empty container should display
// - a button on right side says "add item", should add a div to the stack with an incremental number(starting from 1)
// - clicking any item in the stack should highlight that item
// - clicking the last item on the stack should remove that item from the stack

// hint: use jQuery delegate. live method has been removed from the latest version of jQuery so you may want to use on() or delegate()
class ItemStack {
	constructor(options) {
    this.$stack = $(options.stackSelector);
    this.$addButton = $(options.addButtonSelector);
    this.count = 1;
	}

	init() {
		this.addButtonClickEventHandler();
		this.addListClickEventHandler();
	}

	addButtonClickEventHandler() {
		this.$addButton.bind("click", () => {
	    this.$stack.append(`<div>${this.count}</div`);
	    this.count++;
    });
	}

  addListClickEventHandler() {
  	this.$stack.delegate("div", "click", () => {
      const $target = $(event.target);
  		if($target.is(":last-child")) {
  			$target.remove();
  			this.count--;
  		}
  		else {
  		  $target.addClass("highlight").siblings().removeClass("highlight");	
  		}
  	});
  }
}
options = { stackSelector: "[data-id='stack']",
            addButtonSelector: "[data-id='add_button']" };
let itemStack = new ItemStack(options);
itemStack.init();
