# EinfachDeutsch
Portfolio No.2<br>
ドイツ語講師の経験を生かして、学習科学の観点からドイツ語の単語学習アプリを制作しました。<br>
Go to App: https://einfachdeutsch-f0305.web.app/

# Description
講師時代から学習者に「単語帳を使って勉強するといいよ」とは説明するものの、<br>
あくまで自主学習の範囲として、単語帳の利用は学習者任せになっていました。<br>
ただ、一般的にリリースされている単語帳アプリは機能がイマイチなものも多く、<br>
実際に学習者が積極的に利用しているかについて疑問があり、実際に自分で学習者に使って欲しいと<br>
思うようなアプリを作ってみることにしました。<br><br>

# Target
PC版のWeb Speech APIの機能も考慮し、初学者向けの初級レベルの単語を出題することを想定しています。<br>
まだ学習プロセスが定まっていない学習者のサポートになるツールとしての活用が狙いです。<br><br>

# Usage
![FullSizeRender](https://user-images.githubusercontent.com/65016438/103449871-b0aeb100-4cf1-11eb-8c35-64017c5fb551.gif)<br><br>
①視覚と聴覚をセットにした外国語学習<br>
外国語⇆日本語にただ訳して暗記する方法は学習効果があまり高くないにも関わらず、<br>
いまだにこのパターンの単語帳が圧倒的に多いです。<br>
実際、人間は視覚や聴覚から受ける刺激での記憶の定着率が高いとされているので、<br>
モバイル版ではイラストと一緒に選択ゲーム形式での学習、<br>
PC版ではWebSpeech APIを使用した音声読み上げ機能により聞き取り学習が<br>
できるようになっています。<br><br>

②進度に合わせた単語学習<br>
今までの様々な年代や学習動機を持つ学習者を見てきましたが、<br>
自主学習として単語アプリを継続して活用できる方は少ないです。<br>
理由はいくつかあるのですが、<br><br>
・アプリとしてリリースされているものはあくまで一般的なものなので、自分の学習プロセスにあった単語学習ができない<br>
・自分で単語をセットしていくタイプのものは、単純に面倒になり続かない<br><br>
ことが主に挙げられます。<br>
今回、自分でアプリを制作したことで自分が使っている教科書に合わせて単語を<br>
セットすることができました。たとえば、このアプリを学習者に宿題として<br>
取り組んでもらうようにすれば、学習者は教科書の進度に合わせて確実に<br>
覚えるべき単語を学習できるので、学習効率の改善が期待されるのではと考えています。<br><br>

# Tools
使用言語：Javascript, HTML (Pug)/CSS (Sass)<br>
使用ツール：gulp, Firebase, Github<br>
