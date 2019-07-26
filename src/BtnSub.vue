<template>
  <div class="btn" v-show="isShow">
    <!-- <slot>Отправить</slot> -->
    <!-- <p :title="massageTwo">{{ massageTwo }}</p> -->
    <!-- <input v-model="massageTwo" /> -->

    <ul class="filters">
      <li>
        <router-link to="/first">First</router-link>
      </li>
      <li>
        <router-link to="/second">Second</router-link>
      </li>
      <li>
        <router-link to="/third">Third</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BtnSub',
  data() {
    return {
      massageTwo: '',
      isShow: true,
      msg: 'Massage',
    }
  },
}
</script>
<style scoped>
.btn {
  border: 1px solid #000;
  height: 200px;
}
.filters {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
