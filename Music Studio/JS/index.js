// console.log("hello world");
// let musicList = [{
//   "scr": "https://m701.music.126.net/20220206181709/06975812a2dacf32b09f553c3af2f2ec/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/11983357028/fa35/71e6/ecfb/e58acc011ea31f62f8aad4bb0ce96846.m4a"
//   , "title": "孤勇者"
//   , "auther": "陈奕迅"
//   , "img": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fres.9game.cn%2Fcommunity%2Fforum%2F202111%2F08%2F104334hkc3cwzbc6wcrrnc.jpg&refer=http%3A%2F%2Fres.9game.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646728292&t=f4b84a9761050af2d36d55b8c263ca7f"
// }, {
//   "scr": "https://m701.music.126.net/20220206165217/af718db42fc90cb3acdd0e6d762e6cbd/jdyyaac/005a/545e/0009/70f3057ebac49b803e727c14ce6e5a83.m4a"
//   , "title": "消愁"
//   , "auther": "毛不易"
//   , "img": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190516%2F24a170b332cc416cadac6baea76ecdec.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646728329&t=b625223182726e20073efb2157752619"
// }, {
//   "scr": "https://m801.music.126.net/20220206165340/22446c0f24cf4ca858355aca7e82975d/jdyyaac/055f/5558/030b/257dccc358b2249fbfff4aa4a404d96b.m4a"
//   , "title": "像我这样的人"
//   , "auther": "毛不易"
//   , "img": "https://img2.baidu.com/it/u=2732924623,2253208057&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313"
// }, {
//   "scr": "https://m701.music.126.net/20220206165428/9b861ed93866a206d2dcffb5e7ffa36f/jdyyaac/0758/540f/5109/0245c2a4bbcef41fcdb4fced20a9f9fb.m4a"
//   , "title": "借"
//   , "auther": "毛不易"
//   , "img": "https://img2.baidu.com/it/u=521613288,1471470086&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
// }
// ]

// const $ = selector => document.querySelector(selector)
// const $playingBtn = $('.player .icon-playing')
// const $preBtn = $('.player .icon-play-left')
// const $nextBtn = $('.player .icon-play-right')
// const $title = $('.player .texts h3')
// const $auther = $('.player .texts p')
// const $time = $('.player .time')
// let index = 0
// let curMusic = musicList[index]
// let audioObject = new Audio(curMusic.src)
// $playingBtn.onclick = function () {
//   if (this.classList.contains('icon-playing')) {
//     this.classList.remove('icon-playing')
//     this.classList.add('icon-pause')
//     audioObject.play()
//     console.log(audioObject.duration)
//     console.log(audioObject.currentTime)
//   } else {
//     this.classList.remove('icon-pause')
//     this.classList.add('icon-playing')
//     audioObject.pause()
//   }
// }
// $nextBtn.onclick = function () {
//   index++
//   curMusic = musicList[index]
//   audioObject.src = curMusic.src
// }
console.log();
console.log("hello world");
let a=1
let $playingBtn=document.querySelector('.icon-playing')
let $$btns=document.querySelectorAll('.iconfont')
console.log($playingBtn)
console.log($$btns)
//console.log($playingBtn.classList.contain('icon-pause'))
//$playingBtn.classList.remove('icon-playing')
//$playingBtn.classList.add('icon-pause')
let audioObject=new Audio('https://m801.music.126.net/20220206181454/eecbf26209f3f08f0ab723ac8c7ca972/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/11983357028/fa35/71e6/ecfb/e58acc011ea31f62f8aad4bb0ce96846.m4a')
$playingBtn.onclick=function(e){
      if($playingBtn.classList.contains('icon-playing')){
        $playingBtn.classList.remove('icon-playing')
        $playingBtn.classList.add('icon-pause')
        audioObject.play()
        console.log(audioObject.duration)
        console.log(audioObject.currentTime)
      }else{
        $playingBtn.classList.remove('icon-pause')
        $playingBtn.classList.add('icon-playing')
        audioObject.pause()
      }
      console.log('点击了')
 }
 $nextBtn.onclick=function(){
     audioObject.src="https://m801.music.126.net/20220206181454/eecbf26209f3f08f0ab723ac8c7ca972/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/11983357028/fa35/71e6/ecfb/e58acc011ea31f62f8aad4bb0ce96846.m4a"
     audioObject.play()
 }
