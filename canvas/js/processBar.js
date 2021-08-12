class ProcessBar {
    constructor(props) {
        this._init(props)
    }
    _init(props) {
        this.x = props.x||0
        this.y = props.y||0
        this.w = props.w||600
        this.h = props.h||100
        this.fill = props.fill||'gold'
        this.stroke = props.stroke||'navy'
        this.strokeWidth = props.strokeWidth||4
        this.cornerRadius = props.cornerRadius||10

        let innerRect = new Konva.Rect({
            x:this.x,
            y:this.y,
            width: 100,
            height:this.h,
            fill: this.fill,
            cornerRadius: this.cornerRadius,
            id:'innerRect'
        })
        let outerRect = new Konva.Rect({
            x:this.x,
            y:this.y,
            width: this.w,
            height:this.h,
            stroke: this.stroke,
            strokeWidth: this.strokeWidth,
            cornerRadius: this.cornerRadius
        })
        this.group = new Konva.Group({
            x: 0,
            y: 0,
        })
        this.innerRect=innerRect
        this.group.add(innerRect)
        this.group.add(outerRect)
    }
    change(val) {
        if (val > 1) {
            val=val/100
        }
        let innerRect = this.group.findOne('#innerRect')
        innerRect.to({
            width:this.w*val,
            duration:1.4,
            easing:Konva.Easings.EaseIn
        })
    }
    addGroupToLayer(layer) {
        layer.add(this.group)
    }
}