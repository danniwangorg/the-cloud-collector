1.Glitch deploy failed “cannot get” https://cloud-test3.glitch.me/

【In progress】和tutorial里stage1和2是一样的,stage3这一步我的github里没有node_modules,我在想是不是和这个有关系？但glitch左下角的App Status是绿色的Ok,所以感觉也不是这个问题；或者是因为我的public里的html是套在文件夹里的所以没办法get？

tutorial https://docs.google.com/document/d/1ga6NfyIRu5k4VG7m1qzdeEWrBFVIexqoHr_ZkNXpIz0/edit?usp=sharing

2.在index.js里，socket.io(71-112行）跟node.js（1-70行）无法一起运行

【In progress】"Error: listen EADDRINUSE: address already in use :::3000"

index.js 79行改成5000仍显示错误1

[nodemon] 2.0.14
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
listening at  3000
events.js:377
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE: address already in use :::3000
    at Server.setupListenHandle [as _listen2] (net.js:1331:16)
    at listenInCluster (net.js:1379:12)
    at Server.listen (net.js:1465:7)
    at Object.<anonymous> (/Users/danniwang/Desktop/clouds_collector_test3/index.js:80:8)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47
Emitted 'error' event on Server instance at:
    at emitErrorNT (net.js:1358:8)
    at processTicksAndRejections (internal/process/task_queues.js:82:21) {
  code: 'EADDRINUSE',
  errno: -48,
  syscall: 'listen',
  address: '::',
  port: 3000
}
[nodemon] app crashed - waiting for file changes before starting...

【Done】"SyntaxError: Identifier 'port' has already been declared" 更新79-81行, let listenport

【Done】"SyntaxError: Identifier 'express' has already been declared" 注掉72 73行
