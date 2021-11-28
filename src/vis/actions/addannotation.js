import Action from './action';
import AnnotationType from '../visualization/annotationtype';
import {Arrow, Coloredarea, Circle, Contour, Desaturate, Distribution, Fade, Fill, Glow, Hide, Label, Reference, Regression, Separate, Show, Symbol, Texture} from './annotations'

class AddAnnotation extends Action {
    constructor(spec) {
        super(spec);
        this._method = spec.method;
        if ('target' in spec) {
            this._target = spec.target;
        } else {
            this._target = []
        }
        if ('style' in spec) {
            this._style = spec.style;
        } else {
            this._style = {}
        }
    }

    operate(vis) {
        let annotator = this._type2annotator(this._method)
        let chart = vis.chart();
        let target = this._target;
        let style = this._style;
        annotator.annotate(chart, target, style);
    }

    _type2annotator(type) {
        switch (type) {
            case AnnotationType.ARROW:
                return new Arrow()
            case AnnotationType.COLOREDAREA:
                return new Coloredarea()
            case AnnotationType.CIRCLE:
                return new Circle()
            case AnnotationType.CONTOUR:
                return new Contour()
            case AnnotationType.DESATURATE:
                return new Desaturate()
            case AnnotationType.DISTRIBUTION:
                return new Distribution()
            case AnnotationType.FADE:
                return new Fade()
            case AnnotationType.FILL:
                return new Fill()
            case AnnotationType.GLOW:
                return new Glow()
            case AnnotationType.HIDE:
                return new Hide()
            case AnnotationType.LABEL:
                return new Label()
            case AnnotationType.REFERENCE:
                return new Reference()
            case AnnotationType.REGRESSION:
                return new Regression()
            case AnnotationType.SEPARATE:
                return new Separate()
            case AnnotationType.SHOW:
                return new Show()
            case AnnotationType.SYMBOL:
                return new Symbol()
            case AnnotationType.TEXTURE:
                return new Texture()

            default:
                return new Fill();
        }
    }
}

export default AddAnnotation;