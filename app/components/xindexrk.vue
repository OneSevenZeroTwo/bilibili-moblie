<template>
	<div>
		<div class="index__recommend__src-home-recommend-" data-reactid="109" >
	<div class="index__title__src-home-recommend-" data-reactid="110">
		<div class="index__icon1__src-home-recommend-" data-reactid="111">
			<svg class="index__icon__src-home-recommend-" aria-hidden="true" data-reactid="112">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-bianjituijian" data-reactid="113"></use>
			</svg>
		</div>
		<p data-reactid="114">热门推荐</p>
	</div>
	<a class="index__rank__src-home-recommend-" href="#/rank" data-reactid="115">
		<svg class="index__icon__src-home-recommend- index__fill__src-home-recommend-" aria-hidden="true" data-reactid="116">
			<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-paihangbang1" data-reactid="117"></use>
		</svg>
		<div class="index__words__src-home-recommend-" data-reactid="118" style="width: inherit;">
			<p data-reactid="119">排行榜</p>
		</div>
		<div class="index__arrow__src-home-recommend-" data-reactid="120">
			<svg class="index__icon__src-home-recommend-" aria-hidden="true" data-reactid="121">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-gengduo" data-reactid="122"></use>
			</svg>
		</div>
	</a>
	<div class="index__content__src-home-recommend-" data-reactid="123">
		<a v-for="n in Ranks.slice(0,limit)" class="index__item__src-commonComponent-Item-" :href="'#/detail/'+n.aid"  data-reactid="124">
			<div class="index__imgContainer__src-commonComponent-Item-" data-reactid="125"><img src="//s1.hdslb.com/bfs/static/mult/images/tv.png" class="index__tv__src-commonComponent-Item-" alt="" data-reactid="126"><img :src="images[parseInt(Math.random()*29) + 1]" alt="" class="index__normal__src-commonComponent-Item-" data-reactid="127">
				<div class="index__info__src-commonComponent-Item-" data-reactid="128">
					<div class="index__playIcon__src-commonComponent-Item-" data-reactid="129">
						<svg class="index__icon__src-commonComponent-Item-" aria-hidden="true" data-reactid="130">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-bofangshu" data-reactid="131"></use>
						</svg>
					</div>
					<div class="index__play__src-commonComponent-Item-" data-reactid="132">
						<p data-reactid="133">{{n.play}}</p>
					</div>
					<div class="index__danmuIcon__src-commonComponent-Item-" data-reactid="134">
						<svg class="index__icon__src-commonComponent-Item-" aria-hidden="true" data-reactid="135">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-danmushu" data-reactid="136"></use>
						</svg>
					</div>
					<div class="index__view__src-commonComponent-Item-" data-reactid="137">
						<p data-reactid="138">{{n.video_review}}</p>
					</div>
				</div>
			</div>
			<div class="index__title__src-commonComponent-Item-" data-reactid="139">
				<p data-reactid="140">{{n.title}}</p>
			</div>
		</a>
		
	</div>
</div>
	</div>
</template>
<style>
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
        Ranks() {
          return this.$store.state.Ranks
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
          this.$store.dispatch("setRank")
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