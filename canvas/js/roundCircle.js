class RoundCircle {
    constructor(props) {
        this._init(props)
    }
    _init(props) {
        this.x = props.x||0
        this.y = props.y||0
        this.innerRadius = props.innerRadius||50
        this.outerRadius = props.outerRadius||100
        this.innerFill = props.innerFill||'gold'
        this.outerFill = props.outerFill||'lightBlue'
        this.textColor = props.textColor||'#fff'
        this.textAlign = props.textAlign||'center'
        this.text = props.text||''
        this.fontSize = props.fontSize||14
        this.fontStyle = props.fontStyle||'bold'

        // 中心园
        let cenCircle = new Konva.Circle({
            x:0,
            y:0,
            radius:this.innerRadius,
            fill:this.innerFill,
        })
        // 中心园环
        let cenRing = new Konva.Ring({
            x:0,
            y:0,
            innerRadius:this.innerRadius,
            outerRadius:this.outerRadius,
            fill:this.outerFill,
        })
        // 中心园文字
        let cenText=new Konva.Text({
            x:0-this.outerRadius,
            y:0-(this.fontSize/2),
            width:this.outerRadius*2,
            align:this.textAlign,
            text:this.text,
            fontSize:this.fontSize,
            fontStyle:this.fontStyle,
            fill:this.textColor
        })
        this.group = new Konva.Group({
            x:this.x,
            y:this.y,
        })
        this.group.add(cenCircle)
        this.group.add(cenRing)
        this.group.add(cenText)
    }
    // change(val) {
    //     if (val > 1) {
    //         val=val/100
    //     }
    //     let innerRect = this.group.findOne('#innerRect')
    //     innerRect.to({
    //         width:this.w*val,
    //         duration:1.4,
    //         easing:Konva.Easings.EaseIn
    //     })
    // }
    addGroupToLayer(layer) {
        layer.add(this.group)
    }
}