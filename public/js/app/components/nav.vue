<template>
  <div class="nav_logo" v-on="click: move('#/')">
    <span class="icon_logo"></span>
  </div>
  <div class="nav_menu">
    <ul>
      <li><a v-on="click: move('#/')">{{labels.nav_explore}}</a></li>
      <li><a v-on="click: move('#/favorites')">{{labels.nav_favorites}}</a></li>
      <li><a v-on="click: move('#/about')">{{labels.nav_about}}</a></li>
      <!--li v-if="me" class="nav_profile">
          <a class="icon_profile" v-on="click: move('#/mypage/top')" href="javascript:;">
            <img v-attr="src: me.imageUrl"/>
            <span>{{me.name}}</span>
          </a>
      </li>
      <li v-if="!me"><a v-on="click: move('#/login')">{{labels.nav_login}}</a></li>
      <li><a v-on="click: move('#/')">{{labels.nav_explore}}</a></li>
      <li><a v-on="click: move('#/wishlist')">Wish List</a></li>
      <li><a v-on="click: move('#')">Earn Credit</a><span>$0.00</span></li>
      <li><a v-on="click: move('#')">{{labels.nav_settings}}</a></li>
      <li>
        <a v-on="click: move('#/request/list')">My Bookings</a>
        <div class="nav_bookings">
          <div v-repeat="bookings"></div>
        </div>
      </li>
      <li v-if="me"><a v-on="click: move('#/logout')">{{labels.nav_logout}}</a></li-->
    </ul>
  </div>
  <!--section>
    <div class="nav_sns_wrap">
      <a href="javascript:;" class="icon_sns_fb" v-on="click: onClickShareFB"></a>
      <a href="javascript:;" class="icon_sns_tw" v-on="click: onClickShareTW"></a>
    </div>
  </section-->
</template>

<script lang="babel">
import config from '../../common/config'
import labels from '../../common/labels'
import util from '../../common/util'

export default {
  data() {
    return {
        me: null,
        bookings: [],
        labels: labels
    }
  },

  created() {
    this.$on('onRoute', (options) => {
      this.me = config.loginUser
    })
  },

  methods: {
    move(href) {
      util.getSlideOut().close()
      util.redirect(href)
    },

    onClickShareFB() {
      util.shareFB(config.baseUrl)
    },

    onClickShareTW() {
      util.shareTW(config.baseUrl)
    }
  }
}
</script>