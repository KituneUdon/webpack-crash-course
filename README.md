# webpack-crash-course
udemyの以下教材をやった際の記録用リポジトリ  
https://www.udemy.com/course/webpack-crash-course/  

パッケージのバージョンは古いが、
実際に動作するものを扱いたかったため、教材内で使用されているバージョンと同じバージョンを使用した

# 教材通りに入力しても動かなかった点
## node-sassのversion
教材内では4.10.0が使われていたが、私の環境ではインストールに失敗する  
stack-overflowに4.14.0を入れれば良いという解答を見つけたので、それを試したら動いた  
https://stackoverflow.com/questions/60394291/error-node-modules-node-sass-command-failed

また、4.10.0を入れるときにpython2がないと言われたので、python2をインストールした
