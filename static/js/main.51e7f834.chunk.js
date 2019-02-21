(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t.p+"static/media/logo.da793b47.svg"},17:function(e,n,t){e.exports=t(225)},225:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(11),c=(t(23),t(1)),o=t(2),l=t(4),s=t(3),u=t(5),d=t(227),h=t(228),p=t(229),m=(t(25),t(27),t(14)),f=t.n(m),b=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:f.a,alt:"logo",className:"Header-logo"})),r.a.createElement("h3",null,r.a.createElement("a",{href:"/"},"Solidity by Example")))}}]),n}(a.Component),g=(t(29),t(31),function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("p",{className:"footer"},r.a.createElement("a",{href:"mailto:soliditybyexample@gmail.com"},"soliditybyexample@gmail.com")," | ",r.a.createElement("a",{href:"https://github.com/solidity-by-example/solidity-by-example.github.io"},"source")," | ",r.a.createElement("a",{href:"https://github.com/solidity-by-example/solidity-by-example.github.io#license"},"license"))}}]),n}(a.Component)),y=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("h1",{className:"Home-header"},r.a.createElement("a",{href:"/"},"Solidity by Example")),r.a.createElement("div",{className:"Home-main"},r.a.createElement("p",null,"an introduction to"," ",r.a.createElement("a",{href:"https://solidity.readthedocs.io"},"Solidity")," using example programs"),r.a.createElement("ul",{className:"Home-list"},r.a.createElement("li",null,r.a.createElement("a",{href:"/hello-world"},"Hello World")),r.a.createElement("li",null,r.a.createElement("a",{href:"/simple-storage"},"Simple Storage")),r.a.createElement("li",null,r.a.createElement("a",{href:"/function"},"Function")),r.a.createElement("li",null,r.a.createElement("a",{href:"/function-modifier"},"Function Modifier")),r.a.createElement("li",null,r.a.createElement("a",{href:"/view-and-pure-functions"},"View and Pure Functions")),r.a.createElement("li",null,r.a.createElement("a",{href:"/inheritance"},"Inheritance")),r.a.createElement("li",null,r.a.createElement("a",{href:"/shadowing-inherited-state-variables"},"Shadowing Inherited State Variables")),r.a.createElement("li",null,r.a.createElement("a",{href:"/constructor"},"Constructor")),r.a.createElement("li",null,r.a.createElement("a",{href:"/events"},"Events")),r.a.createElement("li",null,r.a.createElement("a",{href:"/error"},"Error")),r.a.createElement("li",null,r.a.createElement("a",{href:"/payable"},"Payable")),r.a.createElement("li",null,r.a.createElement("a",{href:"/sending-ether"},"Sending Ether")),r.a.createElement("li",null,r.a.createElement("a",{href:"/fallback"},"Fallback")),r.a.createElement("li",null,r.a.createElement("a",{href:"/fallback-gas-limit"},"Fallback Gas Limit")),r.a.createElement("li",null,r.a.createElement("a",{href:"/re-entrancy"},"Re-Entrancy")),r.a.createElement("li",null,r.a.createElement("a",{href:"/self-destruct"},"Self Destruct")),r.a.createElement("li",null,r.a.createElement("a",{href:"/import"},"Import")),r.a.createElement("li",null,r.a.createElement("a",{href:"/safe-math"},"Safe Math")))),r.a.createElement(g,null))}}]),n}(a.Component),E=t(12),w=t.n(E),v=(t(219),t(15)),O=t.n(v),j=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){O()(w.a),w.a.initHighlightingOnLoad()}},{key:"render",value:function(){return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.html}})}}]),n}(a.Component),k=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,this.props.title),r.a.createElement(j,{html:this.props.html}),r.a.createElement("p",null,"Try on ",r.a.createElement("a",{href:"https://remix.ethereum.org",target:"__blank"},"Remix")),r.a.createElement(g,null))}}]),n}(a.Component),x=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(k,{title:"Hello World",html:'<pre><code class="language-solidity">/*\npragma specifies what versions of Solidity this file can work on.\nThis file will not compile with a compiler earlier than version 0.5.3\nand it will also not work on a compiler starting from version 0.6.0\n*/\npragma solidity ^0.5.3;\n\ncontract HelloWorld {\n    function hello() public returns (string memory) {\n        return "Hello World!";\n    }\n}\n</code></pre>\n'})}}]),n}(a.Component),C=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(k,{title:"Simple Storage",html:'<p>State variables are variables which are permanently stored on the blockchain.</p>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\ncontract SimpleStorage {\n    // Variables declared here, inside the contract but outside the\n    // functions will be stored on the blockchain.\n    string public text;\n\n    // Function to get text.\n    function get() public view returns (string memory) {\n        return text;\n    }\n    // Actually we don&#39;t need the function above. The compiler automatically\n    // creates getter functions for all public state variables.\n    // The compiler will create a function called text().\n\n    // Function to set text.\n    function set(string memory _text) public {\n        text = _text;\n    }\n}\n</code></pre>\n'})}}]),n}(a.Component),T=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(k,{title:"Safe Math",html:'<p>Solidity overflow integers as if nothing is wrong. It would be nice if it threw an error.</p>\n<p>So we use <code>SafeMath</code> library by <a href="https://openzeppelin.org/">OpenZeppelin</a>.</p>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\n// Import SafeMath library from github (this import only works on Remix).\nimport "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";\n\ncontract Math {\n    // Include the SafeMath library inside this contract\n    using SafeMath for uint;\n\n    // uint is aliase for uint256 (unsigned integer ranging from 0 to 2 ** 256 - 1)\n    uint public max = 2**256 - 1;\n    // Variables initialize to their default value, 0 in this case.\n    uint public min;\n\n    // Try:\n    // add(1, 2)\n    // add(0, -1)\n    function add(uint x, uint y) public view returns (uint) {\n        return x + y;\n    }\n\n    // Arithmetic overflow does not throw any error.\n    function overflow() public view returns (uint) {\n        return max + 1; // returns 0\n    }\n\n    function underflow() public view returns (uint) {\n        return min - 1; // return 2 ** 256 - 1\n    }\n\n    // SafeMath.add throws an error when an integer overflows.\n    // Try:\n    // safeAdd(2 ** 256 - 1, 1)\n    function safeAdd(uint x, uint y) public view returns (uint) {\n        return x.add(y);\n    }\n\n    // SafeMath.sub throws an error when an integer underflows.\n    // Try:\n    // safeSub(0, 1)\n    function safeSub(uint x, uint y) public view returns (uint) {\n        return x.sub(y);\n    }\n}\n</code></pre>\n'})}}]),n}(a.Component),A=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(k,{title:"Payable",html:'<p>Functions declared <code>payable</code> can receive <code>ether</code> for the contract.</p>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\ncontract ReceiveEther {\n    event Received(address sender, uint amount, uint balance);\n\n    // Get the amount of ethers stored in this contract\n    function getBalance() public view returns (uint) {\n        return address(this).balance;\n    }\n\n    // Try calling this function along with some ether.\n    // The balance of this contract will be automatically updated.\n    function sendEther() public payable {\n        emit Received(msg.sender, msg.value, address(this).balance);\n    }\n\n    // Try calling this function along with some ether.\n    // The function would throw an error since this function is not payable.\n    function notPayable() public {\n    }\n\n    // Delete this contract and refund all ether stored in this contract to msg.sender.\n    function kill() public {\n        selfdestruct(msg.sender);\n    }\n}\n</code></pre>\n'})}}]),n}(a.Component),S=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(k,{title:"Sending Ether (send, transfer, call)",html:'<p>You can send Ether to other contracts by <code>send</code>, <code>transfer</code>, or <code>call</code></p>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\n// Contract to receive Ether\ncontract Receiver {\n    // This is a special function called the fallback.\n    // The fallback function declared payable enables other contracts to\n    // send Ether by send, transfer, or call.\n    function () external payable {\n    }\n\n    // Helper function to check balance\n    function getBalance() public view returns (uint) {\n        return address(this).balance;\n    }\n}\n\ncontract TestSend {\n    event Log(bool sent);\n\n    // Try:\n    // Call this function with the address of the Receiver contract as input.\n    // Also send some Ether when calling this function.\n    function sendEther(address payable addr) public payable {\n        // Send returns a boolean value indicating success or failure.\n        // This function is not recommended for sending Ether.\n        bool sent = addr.send(msg.value);\n\n        // Check the result of send by looking into the transaction logs.\n        emit Log(sent);\n    }\n}\n\ncontract TestTransfer {\n    // Try:\n    // Call this function with the address of the Receiver contract as input.\n    // Also send some Ether when calling this function.\n    function sendEther(address payable addr) public payable {\n        // Transfer will throw an error if it fails sending Ether.\n        // This is the safest way (out of send, transfer and call) to send Ether.\n        addr.transfer(msg.value);\n    }\n}\n\ncontract TestCall {\n    event Log(bool sent);\n\n    // Try:\n    // Call this function with the address of the Receiver contract as input.\n    // Also send some Ether when calling this function.\n    function sendEther(address payable addr) public payable {\n        // Call returns a boolean value indicating success or failure.\n        // We ignore the second value returned.\n        (bool sent,) = addr.call.value(msg.value)("");\n\n        // Check the result of call by looking into the transaction logs.\n        emit Log(sent);\n    }\n}\n</code></pre>\n'})}}]),n}(a.Component),F=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(k,{title:"Fallback",html:'<p>A <code>fallback function</code> is an anonymous function that does not take any arguments and does not return anything.</p>\n<p>Fallback functions are executed when</p>\n<ul>\n<li>calling a function that does not exist</li>\n<li>sending Ether directly to a contract</li>\n</ul>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\ncontract Fallback {\n    event EtherReceived(address sender, uint amount);\n\n    // Fallback function must be declared as external.\n    function () external payable {\n        emit EtherReceived(msg.sender, msg.value);\n    }\n\n    // Helper function to check the balance of this contract\n    function getBalance() public view returns (uint) {\n        return address(this).balance;\n    }\n}\n\ncontract TestFallback {\n    // Try calling test(address of the Fallback contract)\n    function test(Fallback fallback) public payable {\n        // Send Ether to the Fallback contract.\n        address(fallback).transfer(address(this).balance);\n\n        // Calling a function that does not exist in Fallback contract\n        address(fallback).call(abi.encodeWithSignature("nonExistingFunction()"));\n\n        // Check the transaction logs. You will see the event "EtherReceived" emitted twice.\n    }\n}\n</code></pre>\n'})}}]),n}(a.Component),B=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(k,{title:"Fallback Gas Limit",html:'<p><code>Fallback</code> functions have a 2300 gas limit when called by <code>transfer</code> or <code>send</code>.</p>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\ncontract FallbackGasLimit {\n    event BurnGas(uint gasLeft);\n\n    // Try:\n    // Send ether to this contract from an account. This should succeed.\n    function () external payable {\n        // Use up gas by emitting events, logging the remaining gas\n        // on each iteration.\n        for (uint i = 0; i &lt; 10; i++) {\n            emit BurnGas(gasleft());\n        }\n    }\n}\n\ncontract TestFallbackGasLimit {\n    // Try:\n    // Execute this function. This function will fail since\n    // the fallback function of FallbackGasLimit is only allowed to use 2300 gas.\n    function test(FallbackGasLimit fallback) public {\n        address(fallback).transfer(0 ether);\n    }\n}\n</code></pre>\n'})}}]),n}(a.Component),L=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(k,{title:"Re-Entrancy",html:'<p>Here is the setup. Contract <code>A</code> calls contract <code>B</code>.</p>\n<p>The <code>re-entracy</code> exploit allows <code>B</code> to call back into <code>A</code> before <code>A</code> finishes\nit&#39;s execution.</p>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\n// Bank is a contract vulnerable to re-entrancy attack. Let&#39;s see why.\n// To illustrate this attack, we will use 2 accounts.\n// First account - Innocent user\n// Second account - Attacker\n\ncontract Bank {\n    mapping(address =&gt; uint) public balances;\n\n    // Using the first account, deposit 1 Ether in to this contract\n    function deposit() public payable {\n        balances[msg.sender] += msg.value;\n    }\n\n    function withdraw(uint amount) public {\n        if(balances[msg.sender] &gt;= amount) {\n            // Send Ether\n            (bool sent, ) = msg.sender.call.value(amount)("");\n            // Throw an error if send fails.\n            require(sent, "Failed to send ether");\n\n            balances[msg.sender] -= amount;\n        }\n    }\n\n    // Helper function to check the total Ether stored in this contract\n    function getTotalBalance() public view returns (uint) {\n        return address(this).balance;\n    }\n}\n\ncontract Hack {\n    Bank public bank;\n\n    constructor(Bank _bank) public {\n        bank = _bank;\n    }\n\n    // This fallback is called when the Bank contract sends Ether to this contract.\n    function () external payable {\n        if (address(bank).balance &gt;= msg.value) {\n            bank.withdraw(msg.value);\n        }\n    }\n\n    // Try:\n    // Using the second account, call this function sending 1 Ether.\n    function attack() public payable {\n        bank.deposit.value(msg.value)();\n        bank.withdraw(msg.value);\n        // This contract should now have 2 Ethers:\n        // 1 Ether stolen from the first account and\n        // 1 Ether returned to this contract.\n    }\n\n    // Helper function to check the balance of this contract\n    function getBalance() public view returns (uint) {\n        return address(this).balance;\n    }\n}\n</code></pre>\n'})}}]),n}(a.Component),M=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(k,{title:"Self Destruct",html:'<p>Contracts can be deleted from the blockchain by calling <code>selfdestruct</code>.</p>\n<p><code>selfdestruct</code> sends all remainig Ether stored in the contract to an\ndesignated address.</p>\n<p>A malicious contract can use <code>selfdestruct</code> to\nforce send Ether to any contract.</p>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\n// To demonstrate how to force sending Ether to another contract:\n// 1. Deploy the SelfDestruct contract, funding 1 Ether.\n// 2. Deploy the Target contract.\n// 3. Execute kill function in SelfDestruct, passing the address of Target as input.\n// 4. Check the balance of Target contract. It should now have 1 Ether.\n\ncontract SelfDestruct {\n    constructor() public payable {\n    }\n\n    function kill(address payable to) public {\n        selfdestruct(to);\n    }\n}\n\ncontract Target {\n    // Notice this contract does not have a payable fallback,\n    // so we should not be able to send Ether to this contract...\n\n    function getBalance() public view returns (uint) {\n        return address(this).balance;\n    }\n}\n</code></pre>\n'})}}]),n}(a.Component),H=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(k,{title:"Events",html:'<p><code>Events</code> allow logging to the Ethereum blockchain. Some use cass for events are:</p>\n<ul>\n<li>Listening for events and updating user interface</li>\n<li>A cheap form of storage</li>\n</ul>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\ncontract Event {\n    // Event declaration\n    // Up to 3 parameters can be indexed.\n    // Indexed parameters helps you filter the logs by the indexed parameter\n    event Log(address indexed sender, string message);\n    event AnotherLog();\n\n    function test() public {\n        emit Log(msg.sender, "Hello World!");\n        emit Log(msg.sender, "Hello EVM!");\n        emit AnotherLog();\n    }\n}\n</code></pre>\n'})}}]),n}(a.Component),I=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(k,{title:"Error",html:'<p>You can throw an error by calling <code>assert</code>, <code>require</code> or <code>revert</code>.</p>\n<p>An error will undo all changes made to the state during a transaction.</p>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\ncontract Error {\n    uint public i;\n\n    // Require should be used to validate conditions such as:\n    // - inputs\n    // - return values from calls to other functions\n    // - return values from calls to other contracts\n    function testRequire(uint j) public {\n        require(j &gt; 100, "j must be greater than 100");\n        i += j;\n    }\n\n    // Assert should only be used to test for internal errors,\n    // and to check invariants.\n    // Try: testAssert(-1)\n    function testAssert(uint j) public {\n        i += j;\n        assert(i &gt;= j);\n    }\n\n    // Revert can be used to throw an error.\n    function testRevert(uint j) public {\n        i += j;\n        revert("Undoing state changes");\n    }\n}\n</code></pre>\n'})}}]),n}(a.Component),R=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(k,{title:"Import",html:'<p>You can import local and external files in Solidity.</p>\n<h3 id="local">Local</h3>\n<p>Here is our folder structure.</p>\n<pre><code>\u251c\u2500\u2500 Import.sol\n\u2514\u2500\u2500 Foo.sol</code></pre><p>Foo.sol</p>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\ncontract Foo {\n    string public name = "Foo";\n}\n</code></pre>\n<p>Import.sol</p>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\n// import Foo.sol from current directory\nimport "./Foo.sol";\n\ncontract Import {\n    // Initialize Foo.sol\n    Foo public foo = new Foo();\n\n    // Test Foo.sol by getting it&#39;s name.\n    function getFooName() public view returns (string memory) {\n        return foo.name();\n    }\n}\n</code></pre>\n<h3 id="external">External</h3>\n<p>You can also import from <a href="https://github.com">GitHub</a>, but you need to drop <code>blob/&lt;branch name&gt;</code> from the URL.</p>\n<pre><code class="language-solidity">// https://github.com/owner/repo/blob/master/path/to/Contract.sol\n\nimport "github.com/owner/repo/path/to/Contract.sol"</code></pre>\n'})}}]),n}(a.Component),N=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(k,{title:"Function",html:'<p>You can interact with a smart contract by calling the functions defined in the contract.</p>\n<p>Functions that change state variables cost Ether.</p>\n<p>Functions that do not change the state is free when it is called by an account.</p>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\ncontract Function {\n    uint counter;\n\n    // This function costs Ether.\n    function increment(uint i) public {\n        counter += i;\n    }\n\n    // This function is free when it is called from an account.\n    function add(uint i, uint j) public pure returns (uint) {\n        return i + j;\n    }\n\n    // Functions can return multiple values.\n    function returnMultipleVals() public pure returns (uint, uint) {\n        return (1, 2);\n    }\n\n    // Return values can be named. This is useful when a contract\n    // interacts with web3.js where you can access the returned\n    // values by name instead of the returned order.\n    function named() public pure returns (uint x, uint y) {\n        return (1, 2);\n    }\n\n    // Return values can be assigned to their name.\n    // In this case the return statement can be omitted;\n    function assigned() public pure returns (uint x, uint y) {\n        x = 1;\n        y = 2;\n    }\n\n    // Use destructing assignment when calling another\n    // function that returns multiple values.\n    function destructingAssigments() public pure returns (uint) {\n        (uint x, uint y) = (1, 2);\n        // Values can be left out.\n        (uint a, , uint b) = (4, 5, 6);\n        (uint i,) =  returnMultipleVals();\n\n        return x + y + a + b + i;\n    }\n}\n</code></pre>\n'})}}]),n}(a.Component),_=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(k,{title:"Function Modifier",html:'<p>Modifiers are code that can be run before and / or after a function call.</p>\n<p>Modifiers can be used to:</p>\n<ul>\n<li>Validate inputs</li>\n<li>Check contract state</li>\n<li>Restrict access</li>\n</ul>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\ncontract Modifier {\n    // We will use these variables to demonstrate how to use\n    // modifiers.\n    uint public x;\n    address public owner;\n\n    constructor() public {\n        // Set the owner of the contract.\n        owner = msg.sender;\n    }\n\n    // Modifier to check that the caller is the owner of\n    // the contract.\n    modifier onlyOwner() {\n        require(msg.sender == owner, "Not owner");\n        // Execute the function if the validation above passes.\n        _;\n    }\n\n    // Modifiers can take inputs. This modifier checks that the\n    // address passed in is not the zero address.\n    modifier validAddress(address addr) {\n        require(addr != address(0), "Invalid address");\n        _;\n    }\n\n    // Modifiers can be run before and / or after the function.\n    modifier sandwich() {\n        x += 1;\n        _;\n        x += 1;\n    }\n\n    // You can attach multiple modifiers to a function.\n    // In this case the two modifiers onlyOwner and validAddress\n    // will be executed before this function.\n    // Try:\n    // - call this function from an account that did not create\n    //   this contract\n    // - call this function with the zero address:\n    //   0x0000000000000000000000000000000000000000\n    // Both cases will throw an error.\n    function changeOwner(address newOwner)\n        onlyOwner\n        validAddress(newOwner)\n        public\n    {\n        owner = newOwner;\n    }\n\n    // The modifier &#39;sandwich&#39; executes code before and after\n    // this function. As a result, &#39;x&#39; will be incremented by 3.\n    function callMe() sandwich public {\n        x += 1;\n    }\n}\n</code></pre>\n'})}}]),n}(a.Component),V=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(k,{title:"View and Pure Functions",html:'<p>Getter functions can be declared <code>view</code> or <code>pure</code>.</p>\n<p><code>View</code> function declares that no state will be changed.</p>\n<p><code>Pure</code> function declares that no state variable will be read.</p>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\ncontract ViewAndPure {\n    uint public x = 1;\n\n    // Promise not to modify the state.\n    function increment(uint a) public view returns (uint) {\n        return x + a;\n    }\n\n    // Promise not to read from or modify the state.\n    function add(uint a, uint b) public pure returns (uint) {\n        return a + b;\n    }\n}\n</code></pre>\n'})}}]),n}(a.Component),D=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(k,{title:"Inheritance",html:'<p>Solidity supports multiple inheritance. Order of inheritance is important.</p>\n<p>Let&#39;s examine.</p>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\ncontract A {\n    function foo() public view returns (string memory) {\n        return "A";\n    }\n}\n\n// Contracts can inherit other contracts by using the keyword &#39;is&#39;.\ncontract B is A {\n    // Override A.foo()\n    function foo() public view returns (string memory) {\n        return "B";\n    }\n}\n\ncontract C is A {\n    // Override A.foo()\n    function foo() public view returns (string memory) {\n        return "C";\n    }\n}\n\n// Contracts can inherit from multiple parent contracts.\ncontract D is B, C {\n    // When a function is called that is defined multiple times in\n    // different contracts, parent contracts are searched from\n    // right to left.\n\n    // D.foo() returns "C"\n}\n\ncontract E is C, B {\n    // E.foo() returns "B"\n}\n\n// Inheritance must be ordered from \u201cmost base-like\u201d to \u201cmost derived\u201d.\n// Swapping the order of A and B will throw a compilation error.\ncontract F is A, B {\n}\n</code></pre>\n'})}}]),n}(a.Component),G=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(k,{title:"Shadowing Inherited State Variables",html:'<p>Unlike functions, state variables cannot be overridden by re-declaring it\nin the child contract.</p>\n<p>Let&#39;s learn how to correctly override inherited state variables.</p>\n<pre><code class="language-solidity">pragma solidity ^0.5.3;\n\ncontract A {\n    string public name = "Contract A";\n\n    function getName() public view returns (string memory) {\n        return name;\n    }\n}\n\ncontract B is A {\n    // This is the incorrect way to override inherited state variables.\n    string public name = "Contract B";\n\n    // B.getName returns "Contract A"\n\n    // Functions defined in contract A that use the &#39;name&#39; state variable\n    // will access A.name. Functions defined in B that uses &#39;name&#39; will\n    // access B.name.\n}\n\ncontract C is A {\n    // This is the correct way to override inherited state variables.\n    constructor() public {\n        name = "Contract C";\n    }\n\n    // C.getName returns "Contract C"\n}\n</code></pre>\n'})}}]),n}(a.Component),P=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(k,{title:"Constructor",html:'<p>A <code>constructor</code> is an optional function that is executed upon contract creation.</p>\n<p>Here are examples of how to pass arguments to parent <code>constructors</code>.</p>\n<pre><code class="language-solidity">pragma solidity ^0.5.1;\n\ncontract A {\n    string public name;\n\n    constructor(string memory _name) public {\n        name = _name;\n    }\n}\n\n// There are 2 ways to initialize parent contract with parameters.\n\n// Pass the parameters here in the inheritance list.\ncontract B is A("Contract B") {\n}\n\ncontract C is A {\n    // Pass the parameters here in the constructor, similar to modifiers.\n    constructor(string memory _name) A(_name) public {\n    }\n}\n</code></pre>\n'})}}]),n}(a.Component),W=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement("div",{className:"App-main"},r.a.createElement(d.a,{basename:""},r.a.createElement(h.a,null,r.a.createElement(p.a,{path:"/hello-world",component:x}),r.a.createElement(p.a,{path:"/simple-storage",component:C}),r.a.createElement(p.a,{path:"/import",component:R}),r.a.createElement(p.a,{path:"/safe-math",component:T}),r.a.createElement(p.a,{path:"/events",component:H}),r.a.createElement(p.a,{path:"/error",component:I}),r.a.createElement(p.a,{path:"/sending-ether",component:S}),r.a.createElement(p.a,{path:"/payable",component:A}),r.a.createElement(p.a,{path:"/fallback",component:F}),r.a.createElement(p.a,{path:"/fallback-gas-limit",component:B}),r.a.createElement(p.a,{path:"/re-entrancy",component:L}),r.a.createElement(p.a,{path:"/self-destruct",component:M}),r.a.createElement(p.a,{path:"/function",component:N}),r.a.createElement(p.a,{path:"/function-modifier",component:_}),r.a.createElement(p.a,{path:"/view-and-pure-functions",component:V}),r.a.createElement(p.a,{path:"/inheritance",component:D}),r.a.createElement(p.a,{path:"/shadowing-inherited-state-variables",component:G}),r.a.createElement(p.a,{path:"/constructor",component:P}),r.a.createElement(p.a,{component:y})))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=document.getElementById("root");U.hasChildNodes()?Object(i.hydrate)(r.a.createElement(W,null),U):Object(i.render)(r.a.createElement(W,null),U),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},23:function(e,n,t){},25:function(e,n,t){},27:function(e,n,t){},29:function(e,n,t){},31:function(e,n,t){}},[[17,2,1]]]);
//# sourceMappingURL=main.51e7f834.chunk.js.map