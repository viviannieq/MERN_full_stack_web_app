exports.id = "server";
exports.modules = {

/***/ "./src/IssueList.jsx":
/*!***************************!*\
  !*** ./src/IssueList.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/src/IssueList.jsx: Unexpected token, expected \":\" (46:4)\n\n\u001b[0m \u001b[90m 44 | \u001b[39m    \u001b[36msuper\u001b[39m()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 45 | \u001b[39m    \u001b[36mconst\u001b[39m issues \u001b[33m=\u001b[39m store\u001b[33m.\u001b[39minitialData \u001b[33m?\u001b[39m store\u001b[33m.\u001b[39minitialData\u001b[33m.\u001b[39missueList\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 46 | \u001b[39m    \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstate \u001b[33m=\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 47 | \u001b[39m      issues\u001b[33m:\u001b[39m []\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 48 | \u001b[39m    }\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 49 | \u001b[39m    \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcloseIssue \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcloseIssue\u001b[33m.\u001b[39mbind(\u001b[36mthis\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n    at Object._raise (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:754:17)\n    at Object.raiseWithData (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:747:17)\n    at Object.raise (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:741:17)\n    at Object.unexpected (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:8844:16)\n    at Object.expect (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:8830:28)\n    at Object.parseConditional (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:9531:12)\n    at Object.parseMaybeConditional (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:9523:17)\n    at Object.parseMaybeAssign (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:9471:21)\n    at Object.parseVar (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11852:26)\n    at Object.parseVarStatement (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11661:10)\n    at Object.parseStatementContent (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11260:21)\n    at Object.parseStatement (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11193:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11768:25)\n    at Object.parseBlockBody (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11754:10)\n    at Object.parseBlock (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11738:10)\n    at Object.parseFunctionBody (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:10745:24)\n    at Object.parseFunctionBodyAndFinish (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:10728:10)\n    at Object.parseMethod (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:10690:10)\n    at Object.pushClassMethod (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:12193:30)\n    at Object.parseClassMemberWithIsStatic (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:12110:12)\n    at Object.parseClassMember (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:12052:10)\n    at withTopicForbiddingContext (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11997:14)\n    at Object.withTopicForbiddingContext (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11068:14)\n    at Object.parseClassBody (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11974:10)\n    at Object.parseClass (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11948:22)\n    at Object.parseStatementContent (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11235:21)\n    at Object.parseStatement (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11193:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11768:25)\n    at Object.parseBlockBody (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11754:10)\n    at Object.parseTopLevel (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11124:10)");

/***/ })

};
//# sourceMappingURL=server.e0b04eab61d6d07d9122.hot-update.js.map