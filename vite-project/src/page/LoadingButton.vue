<template>
  <a-space style="width: 100%">
    <a-button type="primary" loading>Loading</a-button>
    <a-button type="primary" size="small" loading>Loading</a-button>
  </a-space>
  <a-space style="width: 100%">
    <a-button type="primary" :loading="loading" @mouseenter="loading = true">
      mouseenter me!
    </a-button>
    <a-button type="primary" :loading="iconLoading" @click="enterIconLoading">
      <template #icon><PoweroffOutlined /></template>
      延迟1s
    </a-button>
  </a-space>
  <a-space style="width: 100%">
    <a-button type="primary" loading />
    <a-button type="primary" shape="circle" loading />
    <a-button danger shape="round" loading />
  </a-space>
  <a-button type="primary" shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <a-divider>With Text</a-divider>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { PoweroffOutlined } from '@ant-design/icons-vue';
import { SearchOutlined } from '@ant-design/icons-vue';

interface DelayLoading {
  delay: number;
}
export default defineComponent({
  components: { PoweroffOutlined, SearchOutlined},
  setup() {
    const iconLoading = ref<boolean | DelayLoading>(false);
    const enterIconLoading = () => {
      iconLoading.value = { delay: 1000 };

      setTimeout(() => {
        iconLoading.value = false;
      }, 6000);
    };
    return {
      loading: ref(false),
      iconLoading,
      enterIconLoading,
    };
  },
});
</script>

