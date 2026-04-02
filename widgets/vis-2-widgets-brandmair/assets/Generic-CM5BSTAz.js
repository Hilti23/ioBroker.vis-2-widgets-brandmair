class s extends window.visRxWidget {
  getPropertyValue = (t) => this.state.values[`${this.state.rxData[t]}.val`];
  static getI18nPrefix() {
    return "vis_2_widgets_brandmair_";
  }
}
export {
  s as G
};
