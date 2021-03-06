import Component from 'vue-class-component';

@Component({
    props: {
        closeable: {
            type: Boolean,
            required: false,
            'default': false,
            twoWay: false
        },
        closed: {
            type: Boolean,
            required: false,
            'default': false
        }
    },
    template: require('./chip.html')
})
export default class Chip {
}