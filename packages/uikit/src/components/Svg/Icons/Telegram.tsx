import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    // <Svg viewBox="0 0 20 20" {...props}>
    //   <path d="M10 0C4.478 0 0 4.478 0 9.99 0 15.511 4.478 20 10 20s10-4.488 10-10.01C20 4.477 15.522 0 10 0zm4.925 6.28c-.064.927-1.78 7.856-1.78 7.856s-.107.406-.48.416a.644.644 0 01-.49-.192c-.395-.33-1.29-.97-2.132-1.556a.953.953 0 01-.107.096c-.192.17-.48.416-.789.714a10.7 10.7 0 00-.373.352l-.01.01a2.214 2.214 0 01-.193.171c-.415.341-.458.053-.458-.096l.224-2.441v-.021l.01-.022c.011-.032.033-.043.033-.043s4.36-3.88 4.477-4.296c.01-.021-.021-.042-.074-.021-.288.096-5.31 3.273-5.864 3.625-.032.02-.128.01-.128.01l-2.441-.8s-.288-.117-.192-.383c.021-.053.053-.107.17-.181.544-.384 10-3.785 10-3.785s.267-.085.427-.032c.074.032.117.064.16.17.01.043.021.128.021.224 0 .054-.01.118-.01.224z" />
    // </Svg>

<Svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg"   {...props} >
<path d="M30.7793 0.906677C30.7793 0.906677 33.8761 -0.335548 33.618 2.68129C33.532 3.92353 32.7578 8.27132 32.1557 12.9741L30.0912 26.9048C30.0912 26.9048 29.9191 28.9455 28.3707 29.3005C26.8223 29.6554 24.4998 28.0583 24.0696 27.7033C23.7255 27.4372 17.618 23.4443 15.4674 21.4922C14.8653 20.9598 14.1771 19.895 15.5534 18.6528L24.5858 9.77978C25.618 8.71499 26.6503 6.23054 22.3492 9.24739L10.3061 17.6768C10.3061 17.6768 8.9298 18.5641 6.34919 17.7655L0.757741 15.9909C0.757741 15.9909 -1.30679 14.66 2.22011 13.3289C10.8223 9.15859 21.403 4.89952 30.7793 0.906677Z" fill="#00F666"/>
</Svg>
  );
};

export default Icon;
