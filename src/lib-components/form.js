export default {

    props: {
        value: { required: true },
        label: String
    },
    computed: {
        id () {
            return this.label ? this.label.toLowerCase().replace(/[\W_]+/g,"_") : Math.ceil(Math.random() * 100000)
        },
        dataProxy: {
            get() {
                return this.value
            },
            set(value) {
                this.$emit('input', value)
            }
        }
    },
    data() {
        return {
            isFocussed: this.value?.length,
        }
    },
    methods: {
        focused() {
            this.isFocussed = true
            this.$emit('focus')
        },
        blurred(el) {
            this.isFocussed = el.target.value?.length > 0 || false
            this.$emit('blur')
        }
    }
}