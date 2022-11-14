import React, { useContext, useRef } from 'react';
import { AppContext } from '../../Utils/ContextProvider';
import useGeocoding from '../../Utils/Hooks/useGeocoding';

const AddressInput = () => {
  const input = useRef<HTMLInputElement>(null);
  const value = useRef<HTMLInputElement>(null);
  const { Forward, forwardData } = useGeocoding();

  const { translate } = useContext(AppContext);

  const handleAddress = () => {
    const text = input.current!.value;
    Forward(text);
  }

  const handleSet = (e: any) => {
    const elem: HTMLDivElement = e.target;
    input.current!.value = elem.textContent!;
    value.current!.value = elem.getAttribute("data-coords")!;
    Forward("");
  }

  const list = () => {
    if (forwardData!?.features?.length === 0) {
      return
    } else if (forwardData!?.features?.length === 1) {
      let feature = forwardData!?.features[0];
      console.table(feature);
      input.current!.value = feature.place_name;
      value.current!.value = feature.center[0] + "," + feature.center[1];
      Forward("");
    } else {
      return (
        <div className="autocomplete-items" >
          {forwardData?.features?.map((feature: { [key in string]: any }, i: number) =>
            <div key={i} data-coords={feature.center[0] + "," + feature.center[1]} onClick={handleSet}>
              {feature.place_name}
            </div>
          )}
        </div>
      )
    }
  }

  return (
    <div className="autocomplete">
      <input type="hidden" name="coords" id="coords" ref={value} />
      <input type="text" name="address" id="address" placeholder={translate("address")} onChange={handleAddress} ref={input} required />
      {list()}
    </div>
  )
}

export default AddressInput