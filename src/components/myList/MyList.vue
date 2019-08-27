<template>
  <div class="my-list">
    <van-pull-refresh class="scroll-wrapper" v-model="isLoading" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :immediate-check="false"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <slot :item="item" :index="index"></slot>
          </li>
        </ul>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "MyList",
  props: {
    spacename: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isLoading: false,
      loading: false,
      finished: false
    };
  },
  computed: {
    // ...mapState("news", ["list", "params"]),
    list() {
      return this.$store.state[this.spacename].list;
    },
    params() {
      return this.$store.state[this.spacename].params;
    }
  },
  created() {
    this.getList("reset");
  },
  methods: {
    // ...mapActions("news", ["setParams", "reset", "getList"]),
    setParams(params) {
      this.$store.commit(`${this.spacename}/setParams`, params);
    },
    getList(reset) {
      return this.$store.dispatch(`${this.spacename}/getList`, reset);
    },
    onRefresh() {
      if (this.loading) {
        this.isLoading = false;
        return;
      }
      this.finished = false;
      this.getListWrapper("reset").then(() => {
        this.isLoading = false;
      });
    },
    onLoad() {
      if (this.isLoading) {
        this.loading = false;
        return;
      }
      this.setParams({
        pageNo: ++this.params.pageNo
      });
      this.getListWrapper().then(() => {
        this.loading = false;
      });
    },
    getListWrapper(reset) {
      return this.getList(reset).then(finished => {
        this.finished = finished;
      });
    }
  },
  mounted() {
    const _this = this;

    document.querySelector(".scroll-wrapper").addEventListener(
      "scroll",
      function() {
        // console.log(this.scrollTop);
        _this.$route.meta.savedScrollTop = this.scrollTop;
      },
      false
    );
  }
};
</script>

<style lang="scss" scoped>
.my-list {
  height: 100%;
  .van-pull-refresh {
    height: 100%;
    overflow: visible;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
}
</style>


