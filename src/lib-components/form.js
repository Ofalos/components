export default {

    props: {
        modelValue: { required: true },
        label: String
    },
    computed: {
        id () {
            return this.label ? this.label.toLowerCase().replace(/[\W_]+/g,"_") : Math.ceil(Math.random() * 100000)
        },
        dataProxy: {
            get() {
                return this.modelValue
            },
            set(modelValue) {
                this.$emit('update:modelValue', modelValue)
            }
        }
    },
    data() {
        return {
            isFocussed: this.modelValue?.length,
        }
    },
    methods: {
        focused() {
            this.isFocussed = true
            this.$emit('focus')
        },
        blurred() {
            this.isFocussed = this.modelValue?.length > 0 || false
            this.$emit('blur')
        }
    }
}