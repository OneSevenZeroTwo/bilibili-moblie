<template>
  <div>
      <div class="index__latest__src-partition-latest-">
    <div class="index__title__src-partition-latest-">
        <p>最新视频</p>
    </div>
    <div class="index__content__src-partition-latest-" >
        <a v-for="obj in index" class="index__item__src-commonComponent-Item-" :href="'#/detail/'+obj.aid">
            <div class="index__imgContainer__src-commonComponent-Item-"><img src="//s1.hdslb.com/bfs/static/mult/images/tv.png" class="index__tv__src-commonComponent-Item-" alt=""><img :src="images[parseInt(Math.random()*29) + 1]"  alt="" class="index__normal__src-commonComponent-Item-">
                <div class="index__info__src-commonComponent-Item-">
                    <div class="index__playIcon__src-commonComponent-Item-">
                        <svg class="index__icon__src-commonComponent-Item-" aria-hidden="true">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-bofangshu"></use>
                        </svg>
                    </div>
                    <div class="index__play__src-commonComponent-Item-">
                        <p>{{obj.stat.view}}</p>
                    </div>
                    <div class="index__danmuIcon__src-commonComponent-Item-">
                        <svg class="index__icon__src-commonComponent-Item-" aria-hidden="true">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-danmushu"></use>
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
    <div class="index__checkMore__src-partition-latest-">
        <p>点击加载更多</p>
    </div>
</div>
  </div>
</template>
<style>
  .index__latest__src-partition-latest- {
    position: relative;
    width: 100%;
    padding-top: 60px;
}
.index__latest__src-partition-latest- .index__title__src-partition-latest- {
    position: relative;
    margin-left: .512rem;
    margin-bottom: .40533rem;
}
.index__latest__src-partition-latest- .index__title__src-partition-latest- p {
    font-size: .68267rem;
    line-height: 1.10933rem;
        text-align: center;
    color: #212121;
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
        chan() {
          return this.$store.state.chan
        },
        limit(){
          return this.$store.state.limit
        },
        index() {
        return this.$store.state.index
        },
        images(){
          return this.$store.state.images
        }

      },
      methods: {
        load() {
          this.$store.dispatch("setchannel")
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
        console.log(this.$index)

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
