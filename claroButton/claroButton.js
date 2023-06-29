Component({
  mixins: [],
  data: {},
  props: {
    onTap : () => {}
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {

    onTap(e){
      this.props.onTap(e)
    }
  },


});
