1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

⦁	getElementById - Finds an element with a specific id in an HTML document.
⦁	getElementsByClassName - Finds elements with the same class in an HTML document.
⦁	querySelector - Finds the first matching element in an HTML document using CSS selectors.
⦁	querySelectorAll - Finds all matching elements in an HTML document using CSS selectors.


2. How do you create and insert a new element into the DOM?

⦁	createElement() — create a new element.
⦁	setAttribute() — set any needed attributes, such as ID's or classes.
⦁	createTextNode() — create any needed content.
⦁	appendChild() — attach the new text node to the element.


3. What is Event Bubbling and how does it work?

⦁	Event Bubbling means: The event starts on a child element and gradually reaches its parent, grandparent — from bottom to top.

⦁	When an element (such as a button) is clicked, an event is directed to that element. If an event handler is set for the element, the event handler is triggered. The same event then goes to the parent element of that button. Then to its parent's parent. In this way, the event propagates upwards, step by step, until it reaches the document.


4. What is Event Delegation in JavaScript? Why is it useful?

⦁	Event Delegation is a technique for controlling events of child elements through a parent element.

⦁	Increases performance, makes it easier to handle dynamic elements, and makes code maintenance easier.


5. What is the difference between preventDefault() and stopPropagation() methods?

⦁	preventDefault() - Disables the browser's default behavior.
⦁	stopPropagation() - Stops the event from reaching the parent element.