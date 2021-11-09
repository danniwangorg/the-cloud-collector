1.Glitch deploy failed “cannot get” https://cloud-collector-test.glitch.me/

【In progress】和tutorial里stage1和2是一样的,stage3这一步我的github里没有node_modules,我在想是不是和这个有关系？或者是因为我的public里的html是套在文件夹里的所以没办法get？

tutorial https://docs.google.com/document/d/1ga6NfyIRu5k4VG7m1qzdeEWrBFVIexqoHr_ZkNXpIz0/edit?usp=sharing

2.在index.js里，socket.io(71-112行）跟node.js（1-70行）无法一起运行

【In progress】"Error: listen EADDRINUSE: address already in use :::3000" 他俩不能都听local 3000吗？

【Done】"SyntaxError: Identifier 'port' has already been declared" 更新79-81行, let listenport

【Done】"SyntaxError: Identifier 'express' has already been declared" 注掉72 73行