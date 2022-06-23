<template>
  <div>
    <transition
      enter-active-class="animate__fadeInRight"
      mode="out-in"
      leave-active-class="animate__fadeInleft"
    >
      <router-view class="animate__animated"></router-view>
    </transition>
    <tarBar v-if="$route.meta.showTab"></tarBar>
  </div>
</template>

<script>
import tarBar from "@/components/tarBar.vue";
export default {
  name: "VueApp",
  data() {
    return {};
  },

  mounted() {},

  methods: {},
  components: {
    tarBar,
  },
};
</script>

<style scoped></style>
