import Component from 'vue-class-component';

import docSnippet from '../snippet';
import docImages from './images';
import docSliders from './sliders';

@Component({
    components: {
        docSnippet,
        docImages,
        docSliders
    },
    template: require('./media.html')
})
export default class Media {
    data() {
        return {
            api: [
                {
                    'name': 'Image',
                    'api': require('../../components/image/image-api.json')
                },
                {
                    'name': 'Slider',
                    'api': require('../../components/slider/slider-api.json')
                },
                {
                    'name': 'Slide',
                    'api': require('../../components/slide/slide-api.json')
                }
            ],
            snippets: {
                images: require('./images/image.snippet.html'),
                slides: require('./sliders/sliders.snippet.html')
            },
            src: [
                {
                    name: "Image",
                    script: require("!!html!highlightjs?lang=ts!../../components/image/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/image/image.html'),
                    style: require('!!html!highlightjs?lang=scss!../../components/image/image.scss')
                },
                {
                    name: "Slider",
                    script: require("!!html!highlightjs?lang=ts!../../components/slider/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/slider/slider.html'),
                    style: require('!!html!highlightjs?lang=scss!../../components/slider/slider.scss')
                },
                {
                    name: "Slide",
                    script: require("!!html!highlightjs?lang=ts!../../components/slide/index.ts"),
                    template: require('!!html!highlightjs?lang=html!../../components/slide/slide.html')
                }
            ]
        }
    }
}