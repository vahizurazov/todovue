<template>
  <div class="btn" v-show="isShow">
    <slot>Отправить</slot>
    <p :title="msg">{{ massageTwo }}</p>
    <input v-model="massageTwo" />
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
