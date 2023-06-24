<template>
  <SvgIcon :size="size" :name="picName" />
  <span style="margin-top: 5px; min-width: 48px; text-align: center; font-size: 13px">{{
    title
  }}</span>
</template>

<script>
  export default {
    name: 'OaIcon',
    props: {
      title: {
        type: String,
        default: 'icon',
      },
      picName: {
        type: String,
        required: true,
      },
      size: {
        type: String,
        default: '55',
      },
    },
    data() {
      return {
        iconSrc: '',
      };
    },
  };
</script>
<style scoped lang="less"></style>
