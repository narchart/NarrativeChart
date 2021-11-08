import Action from './action';
import AnnotationType from '../visualization/annotationtype';
import {Arrow, Band, Circle, Contour, Desaturate, Distribution, Fade, Fill, Glow, Label, Reference, Regression, Separate, Shade, Symbol, Texture} from './annotations'

class AddAnnotation extends Action {
    constructor(spec) {
        super(spec);
        this._method = spec.method;
        this._target = spec.target;
    }

    operate(vis) {
        let annotator = this._type2annotator(this._method)
        let chart = vis.chart();
        let target = this._target;
        annotator.annotate(chart, target);
    }

    _type2annotator(type) {
        switch (type) {
            case AnnotationType.ARROW:
                return new Arrow()
            case AnnotationType.BAND:
                return new Band()
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
            case AnnotationType.LABEL:
                return new Label()
            case AnnotationType.REFERENCE:
                return new Reference()
            case AnnotationType.REGRESSION:
                return new Regression()
            case AnnotationType.SEPARATE:
                return new Separate()
            case AnnotationType.SHADE:
                return new Shade()
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