import Component from 'vue-class-component';

import components from '../../../components';
import directives from '../../../directives';

var Vue = Vue || require('vue');

@Component({
    components,
    directives,
    template: require('./default.html')
})
export default class DefaultBreadcrumbs {
    private breadcrumbs: any;
    private label: string;
    private url: string;

    data() {
        return {
            label: 'Fourth',
            url: '#!/breadcrumbs/showcase',
            breadcrumbs: {
                First: '#!/breadcrumbs/showcase',
                Second: '#!/breadcrumbs/showcase',
                Third: '#!/breadcrumbs/showcase'
            }
        }
    }

    push() {
        if (this.label && this.url) {
            Vue.set(this.breadcrumbs, this.label, this.url);
            this.label = '';
            this.url = '';
        }
    }

    pop() {
        var keys = Object.keys(this.breadcrumbs);
        if (keys.length) {
            var last = keys[keys.length - 1];
            Vue.delete(this.breadcrumbs, last);
        }
    }
}
