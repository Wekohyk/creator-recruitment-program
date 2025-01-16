<script setup lang="ts">
const props = defineProps<{
  visible: boolean;
  content: string;
}>();

const emit = defineEmits(['update:visible', 'confirm']);

const sure = () => {
  emit('confirm');
};
</script>

<template>
  <transition
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="props.visible"
      class="fixed top-0 left-0 z-99 w-100vw h-100vh bg-#000000/60 duration-300 transition-all ease-in-out flex-center flex-col"
      @click="emit('update:visible', false)"
    >
      <div @click.stop class="bg-#FFF rounded-20 flex-center flex-col p-20">
        <div class="text-16 font-medium text-#333">{{ props.content }}</div>
        <div class="flex flex-center gap-20 mt-20">
          <div
            class="w-80 h-40 rounded-10 bg-$positive flex-center text-#FFF"
            @click="sure"
          >
            {{ $t('popup.confirmation_box.confirm') }}
          </div>
          <div
            class="w-80 h-40 rounded-10 bg-#8A8A8A/20 flex-center"
            @click="emit('update:visible', false)"
          >
            {{ $t('popup.confirmation_box.cancel') }}
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss"></style>
