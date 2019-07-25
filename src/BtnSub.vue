<template>
  <div class="btn" v-show="isShow">
    <slot>Отправить</slot>
    <p>{{ massageTwo }}</p>
    <input v-model="massageTwo" />
  </div>
</template>

<script>
export default {
  name: 'BtnSub',
  data() {
    return {
      massageTwo: '',
    }
  },
  props: {
    isShow: Boolean,
  },
}
</script>
<style scoped>
.btn {
  border: 1px solid #000;
  padding: 45px;
}
</style>
