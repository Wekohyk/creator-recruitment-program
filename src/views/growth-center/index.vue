<script setup lang="ts">
import PageLayout from '@/components/PageLayout.vue';
</script>

<template>
  <PageLayout background="var(--secondaryBackground)">
    <template #navigationBarCenter>
      <div>{{ $t('growth_center.index') }}</div>
    </template>
  </PageLayout>
</template>

<style scoped lang="scss"></style>
