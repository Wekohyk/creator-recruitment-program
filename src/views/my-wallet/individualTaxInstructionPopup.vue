<script setup lang="ts">
const props = defineProps<{
  visible: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void;
}>();
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
      <div
        @click.stop
        class="w-full max-w-358 rounded-20 bg-#FFF p-20 flex flex-col"
      >
        <div class="text-16 lh-22 font-600 text-center text-#000000">
          {{ $t('my_wallet.individual_tax_instruction_popup.index') }}
        </div>

        <div
          class="mt-4 text-12 lh-17 text-$secondaryText flex flex-col gap-20 flex-grow"
        >
          <div>
            {{ $t('my_wallet.individual_tax_instruction_popup.content_1') }}
          </div>

          <div>
            <span>
              {{ $t('my_wallet.individual_tax_instruction_popup.content_2') }}
            </span>
            <span class="font-600 text-#000">
              {{ $t('my_wallet.individual_tax_instruction_popup.content_3') }}
            </span>
            <span>
              {{ $t('my_wallet.individual_tax_instruction_popup.content_4') }}
            </span>
            <span class="font-600 text-#000">
              {{ $t('my_wallet.individual_tax_instruction_popup.content_5') }}
            </span>
          </div>

          <div>
            {{ $t('my_wallet.individual_tax_instruction_popup.content_6') }}
          </div>
          <div>
            {{ $t('my_wallet.individual_tax_instruction_popup.content_7') }}
          </div>
        </div>

        <div class="mt-20 w-full bg-#0A7AFF/10 rounded-15 text-12 lh-17 p-10">
          <span class="font-600 text-#000">
            {{ $t('my_wallet.individual_tax_instruction_popup.content_8') }}
          </span>
          <span>
            {{ $t('my_wallet.individual_tax_instruction_popup.content_9') }}
          </span>
        </div>

        <div
          class="w-full h-46 mt-20 flex-center rounded-46 bg-$positive text-#FFF"
          @click="emit('update:visible', false)"
        >
          {{ $t('my_wallet.individual_tax_instruction_popup.know') }}
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss"></style>
