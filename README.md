# webpack-crash-course
udemyの以下教材をやった際の記録用リポジトリ  
https://www.udemy.com/course/webpack-crash-course/

# 教材通りに入力しても動かなかった点
## node-sassのversion
教材内では4.10.0が使われていたが、私の環境ではインストールに失敗する  
stack-overflowに4.14.0を入れれば良いという解答を見つけたので、それを試したら動いた  
https://stackoverflow.com/questions/60394291/error-node-modules-node-sass-command-failed
