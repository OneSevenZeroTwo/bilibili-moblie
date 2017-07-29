<template>
	<div style="margin-top: 58px;">
		<div class="gridlist-demo index__different__src-home-different-" v-for="n in news">
			<div class="index__title__src-home-different-">
				<div class="index__icon1__src-home-different-">
					<svg class="index__icon__src-home-different-" aria-hidden="true">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-zhibo"></use>
					</svg>
				</div>
				<p v-for="(obj,index) in n" v-if="index==0">{{obj.tname}}</p>
			</div>
			<a class="index__more__src-home-different-" href="javascript:void(0);" @click="loadMore()">
				<div class="index__words__src-home-different-" >
					<p>查看更多</p>
				</div>
				<!-- <div class="index__arrow__src-home-different-" >
					<svg class="index__icon__src-home-different-" aria-hidden="true">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-gengduo" ></use>
					</svg>
				</div> -->
			</a>
			<div class="index__content__src-home-different-" >
				<a v-for="(obj,index) in n.slice(0,limit)" class="index__item__src-commonComponent-Item-" :href="'#/detail/?aid='+obj.aid" >
					<div class="index__imgContainer__src-commonComponent-Item-"><img src="//s1.hdslb.com/bfs/static/mult/images/tv.png" class="index__tv__src-commonComponent-Item-" alt=""><img  :src="images[parseInt(Math.random()*29) + 1]" alt="" class="index__normal__src-commonComponent-Item-">
						<div class="index__info__src-commonComponent-Item-">
							<div class="index__playIcon__src-commonComponent-Item-">
								<svg class="index__icon__src-commonComponent-Item-" aria-hidden="true">
									<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-bofangshu">
                      <svg id="icon-bofangshu" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M800 128H224C134.4 128 64 198.4 64 288v448c0 89.6 70.4 160 160 160h576c89.6 0 160-70.4 160-160V288c0-89.6-70.4-160-160-160z m96 608c0 54.4-41.6 96-96 96H224c-54.4 0-96-41.6-96-96V288c0-54.4 41.6-96 96-96h576c54.4 0 96 41.6 96 96v448z"></path><path d="M684.8 483.2l-256-112c-22.4-9.6-44.8 6.4-44.8 28.8v224c0 22.4 22.4 38.4 44.8 28.8l256-112c25.6-9.6 25.6-48 0-57.6z"></path></svg>         
                  </use>
								</svg>
							</div>
							<div class="index__play__src-commonComponent-Item-" style="width: 2.7rem;">
								<p>{{obj.stat.view|num}}</p>
							</div>
							<div class="index__danmuIcon__src-commonComponent-Item-">
								<svg class="index__icon__src-commonComponent-Item-" aria-hidden="true">
									<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-danmushu">
                    <svg id="icon-danmushu" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M800 128H224C134.4 128 64 198.4 64 288v448c0 89.6 70.4 160 160 160h576c89.6 0 160-70.4 160-160V288c0-89.6-70.4-160-160-160z m96 608c0 54.4-41.6 96-96 96H224c-54.4 0-96-41.6-96-96V288c0-54.4 41.6-96 96-96h576c54.4 0 96 41.6 96 96v448z"></path><path d="M240 384h64v64h-64zM368 384h384v64h-384zM432 576h352v64h-352zM304 576h64v64h-64z"></path></svg>
                  </use>
								</svg>
							</div>
							<div class="index__view__src-commonComponent-Item-">
								<p>{{obj.stat.danmaku}}</p>
							</div>
						</div>
					</div>
					<div class="index__title__src-commonComponent-Item-">
						<p>{{obj.title}}</p>
					</div>
				</a>
				
			</div>
		</div>
	</div>	
</template>

<script>

  export default {
    data() {
        return {
          //news: null,
          isLoadMore: true
        }
      },
      computed: {
        // search() {
        //   return this.$store.state.count
        // },
        news() {
          return this.$store.state.news
        },
        limit(){
        	return this.$store.state.limit
        },
        images(){
          return this.$store.state.images
        }
      },
      methods: {
        load() {
          this.$store.dispatch("setNews")
        },
        loadMore(){
        	this.$store.state.limit=10
        }
        // changeDirection() {
        //   this.$store.state.direction = "right"
        // }
      },
      mounted() {
        this.load();
        console.log(this.$http)

      },
      filters: {
        time(input) {
          console.log(input)
          return input
        },
        num(input){
          if(input<10000){
            return input;
          }else if(input>10000){
            var n= Math.round((input/10000) * 10) / 10+"万";
            return n
          }
        }
      },
      components: {
        xcontentheader: {
          props: ["imgurl"],
          template: `
        <div class="weui-media-box__hd">
          <img @click="showGallery(imgurl)" class="weui-media-box__thumb" :src="imgurl" alt="">
        </div>
      `,
          methods: {
            showGallery(imgurl) {
              console.log(this.$store.state);
              this.$store.state.imgUrl = imgurl;
              this.$store.state.isShowGallery = true;
            }
          }
        },
        xcontent: {
          props: ["message"],
          template: `
        <p class="weui-media-box__desc" v-html="newMessage"></p>
      `,
          computed: {
            newMessage() {
              return this.message
            }
          }
        }
      }
  }
</script>

<style>
 /*.gridlist-demo-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.gridlist-demo{
  width: 500px;
  height: 450px;
  overflow-y: auto;
}
.mu-grid-tile-title {
    font-size: 14px;
} */
.index__different__src-home-different- {
    position: relative;
    width: 100%;
    margin-top: 10px;
}
.index__different__src-home-different- .index__more__src-home-different- .index__words__src-home-different- {
    position: relative;
    float: left;
    width: 4rem;
    margin-left: .23467rem;
    margin-top: .14933rem;
}
.index__different__src-home-different- .index__title__src-home-different- p {
    position: relative;
    float: left;
    margin-left: .10667rem;
    width: 7rem;
    font-size: 1rem;
    line-height: 1.49333rem;
    text-align: left;
    color: #212121;
}
.index__different__src-home-different- .index__more__src-home-different- .index__words__src-home-different- p {
    font-size: .8rem;
    color: #999;
    text-align: center;
    line-height: .59733rem;
}
.index__different__src-home-different- .index__content__src-home-different- {
    position: relative;
    padding-left: .256rem;
    padding-right: .256rem;
    margin-top: 10px;
}
.index__item__src-commonComponent-Item- .index__imgContainer__src-commonComponent-Item- {
    position: relative;
    width: 8rem;
    height: 5rem;
}
.index__item__src-commonComponent-Item- .index__title__src-commonComponent-Item- {
    width: 145px;
    position: relative;
    margin: auto;
    margin-top: .21333rem;
    height: 44px;
    overflow: hidden;
}
.index__item__src-commonComponent-Item- .index__title__src-commonComponent-Item- p {
    font-size: 12px;
    color: #212121;
    letter-spacing: 0;
    line-height: 14px;
    text-align: left;
}
</style>