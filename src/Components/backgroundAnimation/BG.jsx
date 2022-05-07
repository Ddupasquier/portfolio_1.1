import BackgroundColor from './BackgroundColor';
import Burst from './Burst';

function BG({changeBg, color}) {
  return (
    <>
      <BackgroundColor color={color}/>
      <Burst changeBg={changeBg}/>
    </>
  );
}

export default BG;
