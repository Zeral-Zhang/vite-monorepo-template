<template>
  <button type="button" :class="classes" :style="style" @click="onClick">{{ label }}</button>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'MyButton',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'button': true,
        'button--primary': props.primary,
        'button--secondary': !props.primary,
        [`button--${props.size || 'medium'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit('click');
      }
    }
  },
};
</script>

<style scoped>
  .button {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  }
  .button--primary {
    color: white;
    background-color: #1ea7fd;
  }
  .button--secondary {
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0 0 0 1px inset;
  }
  .button--small {
    font-size: 12px;
    padding: 10px 16px;
  }
  .button--medium {
    font-size: 14px;
    padding: 11px 20px;
  }
  .button--large {
    font-size: 16px;
    padding: 12px 24px;
  }
</style>
