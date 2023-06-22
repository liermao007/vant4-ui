<template>
  <SvgIcon :size="55" :name="picName" />
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
    },
    data() {
      return {
        iconSrc: '',
      };
    },
  };
</script>
<style scoped lang="less"></style>
