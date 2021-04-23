export default {
  props: {
    modelValue: [String, Number],
    label: String
  },
  computed: {
    val() {
      if (this.value) {
        return this.value;
      } else if (this.label) {
        return this.label;
      } else {
        return this.$slots.default()[0].children;
      }
    },
    id() {
      return this.label
        ? this.label.toLowerCase().replace(/[\W_]+/g, "_")
        : Math.ceil(Math.random() * 100000);
    },
    dataProxy: {
      get() {
        return this.modelValue;
      },
      set(modelValue) {
        this.$emit("update:modelValue", modelValue);
      }
    }
  },
  data() {
    return {
      isFocussed: this.modelValue?.length
    };
  },
  methods: {
    focused() {
      this.isFocussed = true;
      this.$emit("focus");
    },
    blurred() {
      this.isFocussed = this.modelValue?.length > 0 || false;
      this.$emit("blur");
    }
  }
};
