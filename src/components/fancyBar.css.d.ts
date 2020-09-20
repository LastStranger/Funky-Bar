declare namespace FancyBarCssNamespace {
  export interface IFancyBarCss {
    animate: string;
    scrollPath: string;
    scrollbar: string;
  }
}

declare const FancyBarCssModule: FancyBarCssNamespace.IFancyBarCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FancyBarCssNamespace.IFancyBarCss;
};

export = FancyBarCssModule;
